import axios from 'axios'
import React, {useEffect, useState} from 'react'
import CardChannel from '../ChannelViewer'
import { CardContainer, CardHead, CardIcon, CardOverTitle, CardPrag, CardWrapper, InfoCard } from './CardElements'
import ReactPaginate from 'react-paginate';

const AllChannels = ({setbodyView}) => {
    const [listofChannels, setListofChannels] = useState([])
    const [listofUsers, setlistofUsers] = useState([])
    const [pageSlice, setpageSlice] = useState({start: 0, end:20})
    const [channelInfo, setChannelInfo] = useState({modal: false , id: 0, listofU: listofUsers})
    const [pageCount, setPageCount] = useState(0);

    const customHeaders =  JSON.parse(localStorage.getItem("headers"))

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_SLACK_APP_BASE_URL}/channels`,
            headers: {'Content-Type': 'application/json', ...customHeaders },
        }
    
        const optionsUsers = {
            method: 'GET',
            url: `${process.env.REACT_APP_SLACK_APP_BASE_URL}/users`,
            headers: {'Content-Type': 'application/json', ...customHeaders },
        }

        axios.request(options)
        .then(response => {
            if (response.status === 200) {
                setListofChannels(response.data)
                const dataSize = response.data
                setPageCount(Math.ceil(dataSize.data.length / 20))
            }
        }).catch(error => console.log(error))
        
        axios.request(optionsUsers)
        .then(response => {
            if (response.status === 200) {
                setlistofUsers(response.data)
            }
        }).catch(error => console.log(error))
        

        return () => {
            
        }
    }, [])

    const handleClicks = e => {        
        setChannelInfo({modal: true, id:e.target.id,listofU: listofUsers})
     }
 

    const getChannels = (event) => {
        if(listofChannels.data && listofUsers.data){


            if(event !== undefined && event.selected === 0){
                setpageSlice({start: 0, end: 20})
            }else if (event !== undefined && event.selected > 0){
                setpageSlice({start: 20 * event.selected, end:  20 * (event.selected + 1 )})
            }

            return(
               listofChannels.data.slice(pageSlice.start, pageSlice.end).map(channels => 
                        <InfoCard key={channels.id} id={channels.id} onClick={e=>handleClicks(e)}>
                        <CardIcon id={channels.id} src={`https://avatars.dicebear.com/api/bottts/${channels.id}.svg`}/>
                    <CardHead id={channels.id}>{channels.name}</CardHead>
                    <CardPrag id={channels.id}>Date of Creation: {new Date(channels.created_at).toLocaleDateString("en-US")}</CardPrag>
                    </InfoCard>
                    ) 
            )  
        }else{
            return(
                <CardPrag>No available channels.</CardPrag>
            )
        }

    }
     
    return (
        <>

            <CardContainer id="channels">
            <CardChannel channelInfo={channelInfo} modalState={setChannelInfo} setbodyView={setbodyView}/>

            <CardOverTitle>
            All Channels
            </CardOverTitle>
            <CardWrapper>
                {
                    getChannels()
                }                
            </CardWrapper>
            <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    onPageChange={getChannels}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    />
            </CardContainer>
        </>
    )
}

export default AllChannels

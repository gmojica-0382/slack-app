import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { CardContainer, CardHead, CardIcon, CardOverTitle, CardPrag, CardWrapper, InfoCard } from '../Channels/CardElements'
import ReactPaginate from 'react-paginate';
import { bodyStateCons } from '../Config'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { NewChannleInfo } from '../NewChannel/NewChannelElements';

const UsersSection = ({setbodyView}) => {
    const customHeaders =  JSON.parse(localStorage.getItem("headers"))
    const [listofUsers, setlistofUsers] = useState("")
    const [pageCount, setPageCount] = useState(0);
    const [pageSlice, setpageSlice] = useState({start: 0, end:20})
    

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_SLACK_APP_BASE_URL}/users`,
            headers: {'Content-Type': 'application/json', ...customHeaders },
        }

        axios.request(options)
        .then(response =>
            
               { setlistofUsers(response.data)
                const dataSize = response.data
                setPageCount(Math.ceil(dataSize.data.length / 20));
            }
        
            
        ).catch(error => console.log(error))

        return () => {
            
        }
    }, [pageSlice])

    const handleOnHover = (result) => {
        // the item hovered
    }

    const handleOnFocus = () => {
    }

    const handleOnSearch = (string, results) => {
    }
    
      const handleOnSelect = (item) => {
        // the item selected
        localStorage.setItem("Cid", item.id)
        setbodyView(bodyStateCons.chatUser)
        
      }
    
      const formatResult = (item) => {
        // return item
        return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
      }


    const messageClick = (e) =>{
        localStorage.setItem("Cid", e.target.id)
        setbodyView(bodyStateCons.chatUser)
    }

    const displayList = (event) =>{
    if(listofUsers !== ""){
        if(event !== undefined && event.selected === 0){
            setpageSlice({start: 0, end: 20})
        }else if (event !== undefined && event.selected > 0){
            setpageSlice({start: 20 * event.selected, end:  20 * (event.selected + 1 )})
        }

      return(  
            listofUsers.data.slice(pageSlice.start, pageSlice.end).map((users, index) => 
            <InfoCard key={users.id} id={users.id} onClick={e => messageClick(e)}>
            <CardIcon id={users.id} src={`https://avatars.dicebear.com/api/bottts/${users.id}.svg`}/>
            <CardHead id={users.id} >{users.email}</CardHead>
            <CardPrag id={users.id}>{new Date(users.created_at).toLocaleDateString("en-US")}</CardPrag>
            </InfoCard>
         )
        )
      }
    }


    return (
        <CardContainer id="users">
            
            <CardOverTitle>
                Users
                <ReactSearchAutocomplete
                items={listofUsers.data}
                onSearch={handleOnSearch}
                fuseOptions={{ keys: ["uid",] }}
                resultStringKeyName="uid"
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}/>
            </CardOverTitle>

            <CardWrapper>
                {
                    displayList()
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
                    onPageChange={displayList}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}/>
            </CardContainer>


    )
}

export default UsersSection

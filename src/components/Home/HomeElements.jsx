import styled from "styled-components"

export const MainContainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: max-content auto;
    grid-template-rows: auto 90%;
    grid-template-areas: 
        "header header"
        "sidebar body"
    ;
`

export const NavigationReWrapper = styled.div`
    grid-area: header;
    height: auto;
`

export const SidebarReWrapper = styled.div`
    grid-area: sidebar;
    width: fit-content;

`
export const BodyReWrapper = styled.div`
    grid-area: body;
`

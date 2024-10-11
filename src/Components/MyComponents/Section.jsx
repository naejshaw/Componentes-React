import styled from 'styled-components'
import datas from '../../utils/data.json'

//TODO: Extrair a cor de background de um JSON
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: ${datas.colors.sectionBackground};
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
`
//const Title = styled.h1`
//font-size: 48px;
//font-weight: bold;
//color: #333;
//`
//const Description = styled.p`
//font-size: 24px;
//color: #666;
//`
//const Button = styled.button`
//background-color: #333;
//color: #fff;
//border: none;
//padding: 10px 20px;
//font-size: 18px;
//cursor: pointer;
//`
//const Container = styled.div`
//display: flex;
//flex-direction: column;
//align-items: center;
//justify-content: center;
//height: 100vh;
//`
//const Header = styled.header`
//background-color: #333;
//color: #fff;
//padding: 20px;
//text-align: center;
//`
//const Main = styled.main`
//display: flex;
//flex-direction: column;
//align-items: center;
//justify-content: center;
//height: 100vh;
//`
//const Footer = styled.footer`
//background-color: #333;
//color: #fff;
//padding: 20px;
//text-align: center;
//`
//const Aside = styled.aside`
//display: flex;
//flex-direction: column;
//align-items: center;
//justify-content: center;
//height: 100vh;
//`
export default Section;
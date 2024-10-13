import styled from "styled-components"
import datas from '../../utils/data.json'

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  
  &:hover{
    color: ${datas.colors.linkHover};
  }
`
const SocialList = styled.ul`
  list-style: none;
  display: flex;
  align-items- center;
  justify-content: space-between;
  padding: 0 auto;
  margin: .5rem auto;
  width:60%;
`
const Social = () => {
    return (<>
        {/* Links para redes sociais, termos de uso, etc. */}
        <SocialList>
          <li><SocialLink href={datas.socials.facebook}>Facebook</SocialLink></li>
          <li><SocialLink href={datas.socials.instagram}>Instagram</SocialLink></li>
          <li><SocialLink href={datas.socials.whatsapp}>Whatsapp</SocialLink></li>
        </SocialList>
    </>);
  };
  
export default Social
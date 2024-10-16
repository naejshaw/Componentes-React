import styled from "styled-components";
import datas from "../../utils/data.json";

const SocialLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: ${datas.colors.linkHover};
  }
`;

const SocialList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0.5rem auto;
  width: 60%;
`;

const Social = () => {
  return (
    <SocialList>
      {Object.keys(datas.socials).map((social, index) => (
        <li key={index}>
          <SocialLink href={datas.socials[social]}>
            {social.charAt(0).toUpperCase() + social.slice(1)}
          </SocialLink>
        </li>
      ))}
    </SocialList>
  );
};

export default Social;
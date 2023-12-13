import styled from "styled-components";
import SnowBg from "../assets/snowBg.svg";

export default function PrintPage() {
    return (
        <Wrap>
            <img src={`${process.env.PUBLIC_URL}/images/type1.svg`} style={{ background: "#D9D9D9" }} />
            <QrBox />
            <Message>QR코드를 통해 사진을 다운로드 하세요</Message>
        </Wrap>
    );
}

const Wrap = styled.main`
    width: 100vw;
    height: 100vh;
    // padding: 356px 0 204px
    background-image: url(${SnowBg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 356px;
    }
`;

const Image = styled.img``;

const QrBox = styled.div`
    width: 165px;
    height: 165px;
    border-radius: 10px;
    background: #a82626;
    margin: 142px 0 91px;
`;

const Message = styled.p`
    color: #9d0c0c;
    font-size: 70px;
    font-weight: 700;
    line-height: 135%;
`;

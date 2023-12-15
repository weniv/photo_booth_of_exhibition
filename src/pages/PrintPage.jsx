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
    background-image: url(${SnowBg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 178px;
        width: 570px;
    }
`;

const Image = styled.img``;

const QrBox = styled.div`
    width: 82px;
    height: 82px;
    border-radius: 5px;
    background: #a82626;
    margin: 71px 0 45px;
`;

const Message = styled.p`
    color: #9d0c0c;
    font-size: 35px;
    font-weight: 700;
    line-height: 135%;
`;

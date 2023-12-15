import { useRef, useState } from "react";
import styled from "styled-components";

export default function SnapPage() {
    const [time, setTime] = useState(10);

    const [pictures, setPictures] = useState([]);
    const videoRef = useRef(null);

    return (
        <>
            <Layout>
                <Timer>{time}</Timer>
                <Video autoPlay ref={videoRef} />
                <Count>(1/4)</Count>
            </Layout>
            <Guide>촬영 중 입니다</Guide>
        </>
    );
}

const Layout = styled.main`
    height: calc(100vh - 144px);
    padding: 109px 0 106px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 38px;
`;

const Timer = styled.div`
    width: 92px;
    height: 92px;
    border-radius: 10px;
    background: #fff;
    color: #9d0c0c;
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 92px;
`;

const Video = styled.video`
    width: 631px;
    height: 792px;
    object-fit: cover;
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg); /* Safari and Chrome */
    -moz-transform: rotateY(180deg);
    background-color: #d9d9d9;
`;

const Count = styled.p`
    color: #9d0c0c;
    text-align: center;
    font-size: 38px;
    font-weight: 700;
`;

const Guide = styled.div`
    width: 100vw;
    height: 144px;
    background: #9d0c0c;
    color: #e9e4d8;
    text-align: center;
    font-size: 55px;
    font-weight: 700;
    line-height: 144px;
`;

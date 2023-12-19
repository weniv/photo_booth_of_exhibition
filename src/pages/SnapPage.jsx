import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import sound from "../assets/camera.wav";

export default function SnapPage({ setResult }) {
    const navigate = useNavigate();
    const [time, setTime] = useState(10);
    const [count, setCount] = useState(0);
    const [pictures, setPictures] = useState([]);
    const audio = new Audio(sound);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    // 비디오 재생
    const startVideo = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef && videoRef.current && !videoRef.current.srcObject) {
            videoRef.current.srcObject = stream;
        }
    };

    useEffect(() => {
        startVideo();
    }, []);

    const takePhoto = () => {
        audio.play();
        const width = 490;
        const height = 630;

        let video = videoRef.current;
        let canvas = canvasRef.current;

        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(video, 0, 0);

        let imageData = canvas.toDataURL("image/png");
        console.log("촬영되었습니다.");
        setPictures([...pictures, imageData]);
        setResult((prev) => [...prev, imageData]);
    };

    // 타이머
    const timer = () => {
        const sec = setTimeout(() => {
            setTime(time - 1);
        }, 1000);
        if (time === 0) {
            takePhoto();
            clearInterval(sec);
            setTime(10);
            setInterval(sec);
            setCount((prev) => prev + 1);
        } else if (pictures.length === 4) {
            clearInterval(sec);
            setTimeout(() => {
                navigate("/print");
            }, 1300);
        }
    };

    useEffect(() => {
        timer();
    }, [time]);

    return (
        <>
            <Layout>
                <Timer>{time}</Timer>
                <VideoCont>
                    <video autoPlay ref={videoRef}></video>
                    <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
                </VideoCont>
                <Count>({count}/4)</Count>
                {/* <div>
                    <PicWrap>{pictures && pictures.map((pic, idx) => <Picture src={pic} key={idx} alt={`${idx + 1}번 사진`}></Picture>)}</PicWrap>
                </div> */}
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

const VideoCont = styled.div`
    width: 631px;
    height: 792px;
    background-color: #d9d9d9;
    overflow: hidden;

    video {
        width: 100%;
        // height: 100%;
        object-fit: cover;
        transform: rotateY(180deg);
        -webkit-transform: rotateY(180deg); /* Safari and Chrome */
        -moz-transform: rotateY(180deg);
    }
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

// const PicWrap = styled.div`
//     width: calc(879.48px);
//     height: calc(1299.64px);
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     align-content: space-between;
//     /* background-color: pink; */
// `;

// const Picture = styled.img``;

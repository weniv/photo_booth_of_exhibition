import styled from "styled-components";
import SnowBg from "../assets/snowBg.svg";
import html2canvas from "html2canvas";
import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useRef, useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import Spinner from "../assets/Spinner.gif";
import Type1 from "../assets/Type1.svg";
import Type2 from "../assets/Type2.svg";
import Type3 from "../assets/Type3.svg";
import Type4 from "../assets/Type4.svg";
import { useNavigate } from "react-router-dom";

export default function PrintPage({ result }) {
    const navigate = useNavigate();
    let idRef = useRef(1);
    const [imgUrl, setImgUrl] = useState("");
    const [isQr, setIsQr] = useState(false);
    const [qrValue, setQrValue] = useState("");
    const frameType = localStorage.getItem("frameType");
    const contentRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentFrame, serCurrentFrame] = useState(null);

    // console.log(frameType);

    useEffect(() => {
        switch (frameType) {
            case "Type1":
                serCurrentFrame(Type1);
                break;
            case "Type2":
                serCurrentFrame(Type2);
                break;
            case "Type3":
                serCurrentFrame(Type3);
                break;
            case "Type4":
                serCurrentFrame(Type4);
                break;
            default:
                // 기본값 설정 (옵션)
                serCurrentFrame(null);
                break;
        }
    }, []);

    const date = new Date();
    const createdDate = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${("0" + date.getDate()).slice(-2)}`;

    const baseURL = "https://weniv.github.io/photo_booth_of_exhibition/download/";

    // 화면 캡쳐
    const imageCaptureHandler = async () => {
        if (!contentRef.current) return;
        const result = contentRef.current;

        try {
            const canvas = await html2canvas(result, { scale: 1 });
            canvas.toBlob((myBlob) => {
                const myFile = new File([myBlob], `${createdDate}-${idRef.current}.jpeg`, {
                    type: myBlob && myBlob.type,
                });
                handleUpload(myFile);
            }, "image/jpeg");
        } catch (error) {
            console.error("Error converting div to image:", error);
        }
    };

    // 이미지 업로드 함수
    const uploadImage = async (imageFile) => {
        const storageRef = ref(storage, "images/" + imageFile.name);
        await uploadBytes(storageRef, imageFile);
        return getDownloadURL(storageRef);
    };

    // 이미지 업로드 및 URL 검색
    const handleUpload = async (imageFile) => {
        const imageUrl = await uploadImage(imageFile);
        setImgUrl(imageUrl);
        setIsQr(true);
        // console.log("Uploaded Image URL:", imageUrl);
    };

    useEffect(() => {
        const images = document.querySelectorAll(".item");
        let loaded = 0;

        images.forEach((image) => {
            if (image.complete) {
                loaded++;
            } else {
                image.onload = () => {
                    loaded++;
                    if (loaded === images.length) {
                        setImagesLoaded(true);
                    }
                };
            }
        });

        if (loaded === images.length) {
            setImagesLoaded(true);
        }
    }, []);

    useEffect(() => {
        setIsQr(false);

        if (imagesLoaded) {
            // 모든 이미지가 로드된 후 html2canvas 호출
            imageCaptureHandler();
        }
    }, [imagesLoaded]);

    useEffect(() => {
        if (imgUrl.length > 1) {
            const specificUrl = imgUrl.split("images")[1];
            setQrValue(baseURL + specificUrl);
        }
    }, [imgUrl]);

    return (
        <>
            <Wrap>
                <ImgBox ref={contentRef}>
                    <FlexBox>
                        {result.map((item, idx) => (
                            <div key={idx}>
                                <img className="item" id={idx} src={item} alt="" />
                            </div>
                        ))}
                    </FlexBox>
                    <Frame src={currentFrame} alt="" />
                </ImgBox>
                <QrBox>
                    {console.log(qrValue)}
                    <LoadingBox>{isQr && qrValue ? <QRCodeCanvas value={qrValue} size={75} /> : <img src={Spinner} style={{ width: "89px" }} alt="로딩중" />}</LoadingBox>
                </QrBox>
                <Message>QR코드를 통해 사진을 다운로드 하세요</Message>
            </Wrap>
            <Guide
                onClick={() => {
                    navigate("/");
                }}
            >
                처음으로 되돌아가기
            </Guide>
        </>
    );
}

const Wrap = styled.main`
    width: 100vw;
    height: calc(100vh - 168px);
    background-image: url(${SnowBg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImgBox = styled.div`
    position: relative;
    margin-top: 93px;
    width: 570px;
    height: 855px;
    background: #d9d9d9;
    overflow: hidden;
`;

const FlexBox = styled.div`
    width: 100%;
    padding: 109px 31px;
    display: flex;
    gap: 11px;
    flex-wrap: wrap;

    div {
        position: relative;
        width: 248px;
        height: 312px;
        overflow: hidden;

        img {
            transform: scaleX(-1);
            // position: absolute;
            // top: 0;
            // left: 0;
            height: 100%;
        }
    }
`;

const Frame = styled.img`
    width: 570px;
    z-index: 100;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
`;

const QrBox = styled.div`
    width: 109px;
    height: 109px;
    border-radius: 7px;
    background: #a82626;
    margin: 30px 0 30px;
    padding: 10px;
`;

const LoadingBox = styled.div`
    background: #fff;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`;

const Message = styled.p`
    color: #9d0c0c;
    font-size: 35px;
    font-weight: 700;
    line-height: 135%;
`;

const Guide = styled.div`
    width: 100vw;
    height: 168px;
    padding: 37px 0 77px;
    background: #9d0c0c;
    color: #e9e4d8;
    text-align: center;
    font-size: 45px;
    font-weight: 700;
`;

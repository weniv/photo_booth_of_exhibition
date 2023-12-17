import styled from "styled-components";
import SnowBg from "../assets/snowBg-mobile.svg";
import Logo from "../assets/logo-mobile.svg";
import { useLocation } from "react-router-dom";

export default function DownloadPage() {
    const location = useLocation();
    const path = location.pathname.split("download/")[1];
    const query = location.search;
    const url = "https://firebasestorage.googleapis.com/v0/b/photo-booth-5ba8e.appspot.com/o/images" + path + query;

    const downloadFile = () => {
        fetch(url, { method: "GET" })
            .then((res) => {
                return res.blob();
            })
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "weniv4cut";
                document.body.appendChild(a);
                a.click();
                setTimeout((_) => {
                    window.URL.revokeObjectURL(url);
                }, 60000);
                a.remove();
            })
            .catch((err) => {
                console.error("err: ", err);
            });
    };

    return (
        <Wrap>
            <Bg>
                <Header>
                    <img src={Logo} alt="" />
                    <h2>
                        <strong>위니브</strong>네컷
                    </h2>
                </Header>
                <Snow>
                    <img src={url} alt="" />
                    <DownBtn type="button" onClick={downloadFile}>
                        Download
                    </DownBtn>
                </Snow>
            </Bg>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: #fff;
    padding: 44px 0 83px;
`;

const Bg = styled.main`
    background: #e9e4d8;
    height: calc(100vh - 127px);
`;

const Header = styled.header`
    padding: 28px 0 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;

    h2 {
        color: #9d0c0c;
        font-size: 24px;
        font-weight: 300;

        strong {
            font-weight: 700;
        }
    }
`;

const Snow = styled.main`
    width: 100%;
    height: calc(100vh-224px);
    background-image: url(${SnowBg});
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;

    img {
        margin-top: 70px;
        width: 257px;
    }
`;

const DownBtn = styled.button`
    border: none;
    cursor: pointer;
    padding: 8px 24px;
    border-radius: 8px;
    background: #9d0c0c;
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 70px;
`;

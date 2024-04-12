import styled from "styled-components";
import Logo from "../assets/logo-mobile.svg";
import { useLocation } from "react-router-dom";

export default function DownloadPage() {
    const location = useLocation();
    const path = location.pathname.split("download/")[1];
    const query = location.search;
    const imageUrl = "https://firebasestorage.googleapis.com/v0/b/photo-booth-5ba8e.appspot.com/o/images" + path + query;
    const videoUrl = "https://firebasestorage.googleapis.com/v0/b/photo-booth-5ba8e.appspot.com/o/videos" + path.split(".")[0] + ".mp4" + query;

    const downloadImageFile = () => {
        fetch(imageUrl, { method: "GET" })
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

    const downloadVideoFile = () => {
        fetch(videoUrl, { method: "GET" })
            .then((res) => {
                return res.blob();
            })
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "weniv4cut.mp4";
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
            <FlexBox>
                <h1>
                    <img src={Logo} alt="jeju AI conference AI 네컷" />
                </h1>
                <Preview src={imageUrl} alt="" />
                <ButtonWrap>
                    <button onClick={downloadImageFile}>Image Download</button>
                    {/* <button onClick={downloadVideoFile}>Video Download</button> */}
                </ButtonWrap>
            </FlexBox>
        </Wrap>
    );
}

const Wrap = styled.main`
    width: 100vs;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.87rem;
`;

const Preview = styled.img`
    width: 80%;
`;

const ButtonWrap = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    button {
        padding: 0.4375rem 1.5rem;
        border-radius: 0.3125rem;
        color: var(--conf-main, #160e26);
        text-align: center;
        font-family: DungGeunMo;
        font-size: 1.25rem;
    }
`;

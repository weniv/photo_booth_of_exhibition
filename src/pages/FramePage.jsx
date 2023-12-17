import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import checkIcon from "../assets/check.svg";

function FrameButton({ frame, id, saveFrame }) {
    return (
        <FrameWrap onClick={(e) => saveFrame(e)}>
            <label htmlFor={id}>
                <input type="radio" id={id} name="frame" />
                <img src={frame} style={{ background: "#D9D9D9" }} alt="" />
            </label>
        </FrameWrap>
    );
}

const FrameWrap = styled.div`
    width: 285px;

    label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 17px;

        input {
            appearance: none;
            width: 27px;
            height: 27px;
            background-color: #c9c9c9;
            border-radius: 50%;
            cursor: pointer;

            &:checked {
                &::after {
                    content: "";
                    display: block;
                    width: 27px;
                    height: 27px;
                    background-image: url(${checkIcon});
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }
            }
        }

        img {
            width: 100%;
        }
    }
`;

export default function FramePage() {
    const navigate = useNavigate();
    const [frameType, setFrameType] = useState("");

    const saveFrame = (e) => {
        setFrameType(e.target.id);
    };

    useEffect(() => {
        localStorage.setItem("frameType", frameType);

        if (frameType) {
            setTimeout(() => {
                navigate("/snap");
            }, 1300);
        }
    }, [frameType]);

    return (
        <>
            <Layout>
                <FlexBox>
                    <FrameButton frame={`${process.env.PUBLIC_URL}/images/type1.svg`} id="Type1" saveFrame={saveFrame} />
                    <FrameButton frame={`${process.env.PUBLIC_URL}/images/type2.svg`} id="Type2" saveFrame={saveFrame} />
                </FlexBox>
                <FlexBox>
                    <FrameButton frame={`${process.env.PUBLIC_URL}/images/type3.svg`} id="Type3" saveFrame={saveFrame} />
                    <FrameButton frame={`${process.env.PUBLIC_URL}/images/type4.svg`} id="Type4" saveFrame={saveFrame} />
                </FlexBox>
            </Layout>
            <Guide>{frameType ? "프레임이 선택되었습니다" : "프레임을 선택해 주세요"}</Guide>
        </>
    );
}

const Layout = styled.main`
    height: calc(100vh - 144px);
    padding: 123px 0 113px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
`;

const FlexBox = styled.div`
    display: flex;
    gap: 23px;
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

import styled from "styled-components";
export const CssStyle = styled.div`
  & .header {
    background: var(--Main-Green, #2ea97d);
    box-shadow: 0px 1px 16px 0px rgba(72, 109, 96, 0.06);
    width: 100%;
    height: 44px;
    flex-shrink: 0;
  }
  & .main {
    display: flex;
    & .main_card {
      width: 15%;
      height: 100%;
      flex-shrink: 0;
      background: #fff;
      box-shadow: -1px 0px 16px 0px rgba(0, 0, 0, 0.06);
    }
    & .main_cards {
      width: 85%;
      height: 100%;
      flex-shrink: 0;
      background: #f0f0f0;
      & .weak {
        color: var(--BW-100, #181a19);
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-top: 20px;
        margin-left: 32px;
        display: flex;
        align-items: center;
        & .point {
          & .pointfilled {
            width: 20px;
            height: 10px;
            color: #386e56;
          }
        }
        & .number {
          color: var(--BW-60, #6d7471);
          font-family: Roboto;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }
      & .main_cards_cards {
        overflow-x: auto;
        margin: 0px 26px;
        display: flex;
        gap: 26px;
        & .cards {
          width: 350px;
          border-radius: 4px;
          border: 1px solid var(--BW-20, #c9d2ce);
          display: inline-flex;
          padding: 1px 1px 12px 1px;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          & .card_header {
            border-radius: 3px 3px 0px 0px;
            border-bottom: 1px solid var(--BW-20, #c9d2ce);
            background: #f2faf6;
            display: flex;
            width: 284px;
            padding: 11px 0px 12px 9px;
            align-items: center;
            & .card_header_weak {
              color: var(--BW-80, #414644);
              font-family: Roboto;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              display: flex;
              align-items: center;
              margin: 11px 201px 12px 9px;
              & .point {
                & .pointfilled {
                  margin: 0px 4px;
                  width: 10px;
                  height: 10px;
                  color: #c9d2ce;
                }
                & .number {
                  color: var(--BW-80, #414644);
                  font-family: Roboto;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: normal;
                }
              }
            }
          }
          & .addfiles {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 70px;
            & p {
              color: var(--BW-60, #6d7471);
              text-align: center;
              font-family: Roboto;
              font-size: 13px;
              font-style: normal;
              font-weight: 600;
              line-height: normal;
              margin: 24px 40px;
            }
          }
          & .items {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            height: calc(100vh - 233px);
            overflow-y: auto;
            & .card {
              width: 95%;
              display: flex;
              justify-content: space-between;

              margin-bottom: 10px;
              border-radius: 4px;
              background: #fff;
              box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.15) inset,
                0px 2px 0px 0px rgba(0, 0, 0, 0.05) inset;
              align-items: flex-start;
              & .card_main {
                margin: 12px 28px 12px 12px;
                & h5 {
                  overflow: hidden;
                  color: var(--BW-100, #181a19);
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-family: Roboto;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
                  flex-shrink: 0;
                  margin: 0px;
                }
                & p {
                  overflow: hidden;
                  color: var(--BW-60, #6d7471);
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-family: Roboto;
                  font-size: 12px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                  margin: 4px 0px 0px;
                }
                & .in_priority {
                  display: flex;
                  align-items: center;
                  gap: 8px;
                  margin-top: 8px;
                  & h6 {
                    color: var(--Additional-Violet, #856ec6);
                    font-family: Roboto;
                    font-size: 11px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    margin: 0px;
                    border-radius: 4px;
                    background: #f6f2ff;
                    border-radius: 4px;
                    background: #f6f2ff;
                    display: flex;
                    height: 24px;
                    padding: 4px 8px;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                  }
                  & .user {
                    border-radius: 4px;
                    border: 1px solid #ebf3ef;
                    background: var(--Additional-Bright, #fafffc);
                    display: flex;
                    padding: 4px;
                    align-items: center;
                    gap: 4px;
                    height: 24px;
                    color: var(--BW-80, #414644);
                    font-family: Roboto;
                    font-size: 11px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    & .fiusers {
                      width: 16px;
                      height: 16px;
                      color: var(--BW-40, #969f9b);
                    }
                  }
                  & .file {
                    display: flex;
                    padding: 4px;
                    align-items: center;
                    height: 24px;
                    gap: 4px;
                    border-radius: 4px;
                    border: 1px solid #ebf3ef;
                    background: var(--Additional-Bright, #fafffc);
                    color: var(--BW-80, #414644);
                    font-family: Roboto;
                    font-size: 11px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    & .filetext {
                      width: 16px;
                      height: 16px;
                      color: var(--BW-40, #969f9b);
                    }
                  }
                }
                & .image {
                  display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  margin-top: 12px;
                  & img {
                    width: 28px;
                    height: 28px;
                    border-radius: 28px;
                    border: 1px solid var(--BW-20, #c9d2ce);
                    background: url(<path-to-image>),
                      lightgray 50% / cover no-repeat;
                  }
                  & .rektor {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 2px;
                    width: 150px;
                    height: 28p;
                    & h5 {
                      overflow: hidden;
                      color: var(--BW-40, #969f9b);
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      font-family: Roboto;
                      font-size: 11px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: normal;
                    }
                    & h4 {
                      overflow: hidden;
                      color: var(--BW-80, #414644);
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      font-family: Roboto;
                      font-size: 12px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: normal;
                      margin: 0px;
                    }
                  }
                }
              }
              & .card_points {
                width: 25px;
                height: 20px;
                display: flex;
                margin: 12px 12px;
                flex-direction: column;
                flex-wrap: nowrap;
                align-items: flex-end;
                & .pointfilled {
                  width: 25px;
                  height: 100px;
                  color: #c9d2ce;
                }
              }
            }
          }
        }
      }
    }
  }
`;

import styled from 'styled-components';


export const Header = styled.div`
  font: 12px 'Orbitron', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 50px 50px 30px;

  header {
    margin: 10px;

    h1 {
      font-size: 3em;

      span {
        color: #21d8ff;
      }
    }
  }

  ul {
    display: flex;
    font-size: 1.5em;
    margin-top: 5px;

    a {
      text-decoration: none;
      color: inherit;

      li {
        padding: 0 10px;
        cursor: pointer;
        transition: color 100ms ease-in-out;

        :hover {
          color: #21d8ff;
        }
      }
    }
  }
`;

export const Card = styled.li`
  color: #fff;
  background: #989898;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  position: relative;

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  div {
    display: flex;
    flex: 1;
    position: relative;
    img {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
    .overlay{
      width:100%;
      position:absolute;
      background:rgba(0,0,0,0.6);
      bottom: 0;
    
    }
    .overlay div {
      display: block;
      padding: 20px;
  
      h4 {
        color:white;
        line-height:30px;
        font-size:30px;
        text-align: left;
      }
  
      div {
        padding: 0;
      }
    }
  }

  section {
    text-align: center;

    header {
      padding: 10px;

      .details {
        flex-direction: column;

        li {
          display: flex;
          justify-content: space-between
        }
        display: flex;
        .title {
          width: 35%;
          text-align: left;
        }
        .value {
          width: 60%;
          text-align: right;
        }
      }

      h3 {
        span {
          background: #fff;
          color: #7159c1;
          border-radius: 50%;
          padding: 0 6px;
        }
      }

      h5 {
        color: #fff;
        margin-top: 5px;
      }
    }
  }
`;

export const CardGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  flex: 3;
  background: rgb(0,0,0,0.5);
`;


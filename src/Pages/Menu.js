import React, { useContext } from 'react';
import { NameContext } from '../Contexts/charContext';
import '../Styles/Menu.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ReactPaginate from "react-paginate";


function Menu({ charList }) {

    const [searchKey, setSearchKey] = useState("");
    const [pagesNumbre, setPagesNumbre] = useState(0);
    let navigate = useNavigate();
    const { setName } = useContext(NameContext);

    const charPerPage = 16;
    const pagesVisited = pagesNumbre * charPerPage;

    const pageCount = Math.ceil(charList.filter((char) => {
        if (searchKey == " ") {
            return char
        } else if (char.name.toLowerCase().includes(searchKey.toLowerCase())) {
            return char
        }
    }).length / charPerPage);

    const charinfo = (charId, name) => {
        navigate(`/characters/${charId}`)
        setName(name);
    }

    const displayChars = charList.filter((char) => {
        if (searchKey == " ") {
            return char
        } else if (char.name.toLowerCase().includes(searchKey.toLowerCase())) {
            return char
        }
    }).slice(pagesVisited, pagesVisited + charPerPage)
        .map((char, index) => {
            return (
                <div className='card' key={index} onClick={() => charinfo(char.char_id, char.name)}>
                    <div className='image'>
                        <img src={char.img} alt='image' />
                    </div>
                    <div className='info'>
                        <span>{char.name}</span>
                        <span>{char.nickname}</span>
                    </div>
                </div>
            )
        })

    const changePage = ({ selected }) => {
        setPagesNumbre(selected);
    }

    return (
        <div className='menu'>
            <div className='serach'>
                <input type='text' placeholder='serach...'
                    onChange={(e) => {
                        setSearchKey(e.target.value);
                    }}
                />
                <div className='serach-icon'>
                    <SearchIcon />
                </div>
            </div>
            <div className='char-list'>
                {displayChars}
            </div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBody"}
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"Active"}
            />
        </div >
    )
}

export default Menu
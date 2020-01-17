import React from 'react';
import { ListContainer, ListItem } from './List.styled';
import PropTypes from 'prop-types';

export const List = ({items})=>{

    const owner = items[0] && items[0].owner;

    return (
        <ListContainer>
            { owner && 
                <h1><img src={owner.avatar_url} alt="owner-avatar"/>{owner.login}</h1>
            }
            {items.length > 0 && items.map(item => (
                <ListItem>
                    <a href={`${item.html_url}`} target="_blank" rel="noopener noreferrer">
                        <p><span class="star">★</span> {item.stargazers_count}</p>
                        <p><strong>{item.name}</strong></p>
                        <span className='more'>View Repo</span>
                    </a>
                </ListItem>
            ))}
        </ListContainer>
    );

};

List.propTypes = {
    
};

List.defaultProps = {

};

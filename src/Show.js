// const List = ({ id, name, age, image }) => {
//     //console.log(id);
//     return (
//       <article>
//         <img src={image} alt={name} />
//         <div>
//           <h4>{name}</h4>
//           <p>{age} years</p>
//         </div>
//       </article>
//     );
//   };

//   export default List;

import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function Show({ id, name, age, image,date }) {

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', textAlign: 'center' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={image} />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={
                        <React.Fragment>
                            <Typography sx={{display: 'inline'}} color="text.primary">
                                Birthday Date {date}
                            </Typography><br/>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {age} Years
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    )
}

export default Show;
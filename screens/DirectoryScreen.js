import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

const DirectoryScreen = ({ navigation }) => {
 const  [campsites, setCampsites] = useState(CAMPSITES);

    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <ListItem onPress={() => navigation.navigate('CampsiteInfo', { campsite })}>
                <Avatar source={campsite.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{campsite.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {campsite.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
    //    <p>hello world</p> 
        <FlatList data={props.campsite}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()} >
        </FlatList>
    )
}
export default DirectoryScreen;
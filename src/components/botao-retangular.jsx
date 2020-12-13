import React from 'react'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const BotaoRetangular = (props) => {
        return(
            <Button
                title={props.title}
                buttonStyle={{
                    backgroundColor: "#FBB03B",
                    borderBottomEndRadius: 50,
                    borderBottomStartRadius: 50,
                    borderTopEndRadius: 50,
                    borderTopStartRadius: 50,
                    height:50,
                }}
                titleStyle={{
                    color:"black",
                    marginLeft:10,
                    marginRight:10,
                }}
                 icon={
                    <Icon
                      name="plus"
                      size={15}
                      color="black"
                    />
                  }
                 onPress={props.onPress}
            />
        );
}

export default BotaoRetangular;
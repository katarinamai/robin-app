import React from 'react'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const BotaoRedondo = (props) => {
        return(
            <Button
                buttonStyle={{
                    backgroundColor: "#FBB03B",
                    borderBottomEndRadius: 200,
                    borderBottomStartRadius: 200,
                    borderTopEndRadius: 200,
                    borderTopStartRadius: 200,
                    width:70,
                    height:70,
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

export default BotaoRedondo;
import React from 'react'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const BotaoBack = (props) => {
        return(
            <Button
            buttonStyle={{
                backgroundColor: "transparent",
            }}
                 icon={
                    <Icon
                      name="arrow-left"
                      size={20}
                      color="black"
                    />
                  }
                 onPress={props.onPress}
            />
        );
}

export default BotaoBack;
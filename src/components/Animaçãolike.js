
import React, { useCallback, useRef } from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import {TapGestureHandler,GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {useAnimatedStyle,useSharedValue,withDelay,withSpring,withTiming} from 'react-native-reanimated';


const AnimatedImage = Animated.createAnimatedComponent(Image);

function Heart() {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(1);

  const doubleTapRef = useRef();

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(scale.value, 0) }],
  }));


  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  }, []);

  const onSingleTap = useCallback(() => {
    opacity.value = withTiming(0, undefined, (isFinished) => {
      if (isFinished) {
        opacity.value = withDelay(500, withTiming(1));
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <TapGestureHandler waitFor={doubleTapRef} onActivated={onSingleTap}>
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={onDoubleTap}
        >
          <Animated.View>
              <AnimatedImage
                source={require('./assets/heart.png')}
                style={[
                  styles.image,
                  {
                    shadowOffset: { width: 0, height: 20 },
                    shadowOpacity: 0.35,
                    shadowRadius: 35,
                  },
                  rStyle,
                ]}
                resizeMode={'center'}
              />
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </View>
  );
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: SIZE,
      height: SIZE,
    },
    turtles: { fontSize: 40, textAlign: 'center', marginTop: 30 },
  });

  
  export default Heart() => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <App />
    </GestureHandlerRootView>
  );
};
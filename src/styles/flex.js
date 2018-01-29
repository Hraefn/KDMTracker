import { StyleSheet } from 'react-native'

const flex = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212223',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#8e2404',
    borderBottomColor:'#8e2404',
    borderLeftColor: '#8e2404',
    borderRightColor: '#8e2404',
    borderTopWidth: 33,
    borderBottomWidth: 10,
    borderLeftWidth: 5,
    borderRightWidth: 5,
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  container2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  container3: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = flex;

import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow:{
        marginHorizontal: 20,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        position:"absolute",
        top: SIZES.medium,
        width: SIZES.width -44,
        zIndex: 999,
    },
    image:{
        aspectRatio: 1,
        resizeMode: 'cover',

    },
    details:{
        marginTop: -SIZES.large,
        marginBottom: SIZES.xxLarge +20,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium
    },
    titleRow:{
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:'center',
        width: SIZES.width -44,
        top: 20,
    },
    title:{
        fontFamily:'bold',
        fontSize: SIZES.large,
    },
    subtitle:{
        fontFamily:'regular',
        fontSize: SIZES.xSmall,
    },
    price:{
        padding: 10,
        fontFamily:'semibold',
        fontSize: SIZES.large,
    },
    priceWrapper:{
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large,
    },
    reviewContainer: {
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width: SIZES.width -10,
        top: 5,
      },
    rating:{
        top: SIZES.large,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginHorizontal: SIZES.large
    },
    ratingText:{
        color:COLORS.black,
        fontFamily: 'medium',
        alignItems:'center',
        marginHorizontal: SIZES.small
    },
    descriptionWrapper:{
        marginTop:SIZES.large*2,
        marginHorizontal: SIZES.large,
    },
    description:{
        fontFamily:'medium',
        fontSize: SIZES.large-2,
    },
    descText:{
        fontFamily: 'regular',
        fontSize: SIZES.small,
        textAlign: "justify",
        marginBottom: SIZES.small,
    },
    bottomContainer:{
        flexDirection:'row',
        position:'absolute',
        bottom: 0,
        left: 0,
        width: SIZES.width,
    },
    bottomBox1:{
        width: SIZES.width/2,
        justifyContent:'center',
        alignItems:'center',
        padding: SIZES.small,
        borderColor: COLORS.black,
        backgroundColor: COLORS.white,
        borderWidth: 0.2,
    },
    bottomBox2:{
        width: SIZES.width/2,
        justifyContent:'center',
        alignItems:'center',
        padding: SIZES.small,
        borderColor: COLORS.black,
        borderWidth: 0.2,
        backgroundColor: COLORS.primary
    },
    bottomBoxText1:{
        fontFamily: 'bold',
        color: COLORS.white,
        fontSize: SIZES.medium,
        color: COLORS.yellow
    },
    bottomBoxText2:{
        fontFamily: 'bold',
        color: COLORS.white,
        fontSize: SIZES.medium,
        color:COLORS.white,
    },
})

export default styles
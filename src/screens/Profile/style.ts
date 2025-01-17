import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const ScreenBackground = styled.SafeAreaView`
flex: 1;
background-color: ${({theme}) => theme.colors.backgroundColor};
`;


export const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;



const PictureContainerHeight = Dimensions.get('window').height * 0.20;
const PictureContainerWidth = Dimensions.get('window').width * 0.22;
export const PictureContainer = styled.View`
    margin-top: ${RFValue(12)}px;
    height: ${PictureContainerHeight}px;
    width: ${PictureContainerWidth}px;
    padding-top :${RFValue(3)}px ;
    padding-left: ${RFValue(3)}px;
    
    
`;

const ProfilePictureHeight = Dimensions.get('window').height * 0.14;
const ProfilePictureWidth = Dimensions.get('window').width *  0.20;
export const ProfilePicture = styled.Image`
    border-radius: 100px;
    height: ${ProfilePictureHeight}px;
    width: ${ProfilePictureWidth}px;  

`;

export const ProfileName = styled.Text`
    color: ${({theme}) => theme.colors.colorWhite};
    flex: 1;
    font-size: ${RFValue(16)}px;
`;


const ContainerPubFollHeight = Dimensions.get('window').height * 0.1;
const ContainerPubFollWidth = Dimensions.get('window').width *  0.75;
export const ContainerPubFoll = styled.View`
    height: ${ContainerPubFollHeight}px;
    width: ${ContainerPubFollWidth}px;
    flex-direction: row;
    margin-bottom: ${RFValue(10)}px;;
`;


export const ContainerPub = styled.View`
    flex: 1;
`;


export const ContainerFollowers = styled.View`
    flex: 1;
`;


export const ContainerFollowed = styled.View`
flex: 1;
`;


export const TextNumber = styled.Text`
    text-align: center;
    font-size: ${RFValue(17)}px;
    color: ${({theme}) => theme.colors.colorWhite};
`;


export const TextPubFoll = styled.Text`
    text-align: center;
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.colorWhite};
`;


const ContainerBioHeight = Dimensions.get('window').height * 0.10;
const ContainerBioWidth = Dimensions.get('window').width *  1;
export const ContainerBioFoll = styled.View`
    height: ${ContainerBioHeight}px;
    width: ${ContainerBioWidth}px;
    padding-left: ${RFValue(3)}px;
    
    
`;


export const TextBio = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.colorWhite};
    padding-bottom: ${RFValue(2)}px;
    font-family:${({theme}) => theme.fonts.light} ;
`;


export const LinkButton = styled.TouchableOpacity`
    text-decoration-line: underline;
`;
export const TextLinkButton = styled.Text`
    color: ${({theme}) => theme.colors.colorBlue};
    text-decoration-line: underline;
    font-size: ${RFValue(14)}px;
`;



export const ContainerButtons = styled.View`
   

    padding: ${RFValue(12)}px;
    flex-direction: row;

`;
export const ButtonFollow = styled.View`
    flex:1;
    margin-right:${RFValue(6)}px;
`;
export const ButtonMessage = styled.View`
 flex:1;
 margin-left:${RFValue(12)}px;
`;

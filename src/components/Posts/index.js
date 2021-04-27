import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, } from 'react-native';
import Modal from 'react-native-modal';
//import CheckBox from '@react-native-community/checkbox';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {colors} from '../../configs/index'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        opacity: 0,
        isModalVisibleSave: false,
        isModalVisibleSignal: false,
        isModalVisibleBloq: false,

        toggleCheckBox1: false,
        toggleCheckBox2: false,
        toggleCheckBox3: false,
        toggleCheckBox4: false,
        toggleCheckBox5: false,
        toggleCheckBox6: false,
    };
  }

  modalSave = () => {
    return(
      <Modal isVisible={this.state.isModalVisibleSave}>
        <View style={{backgroundColor: colors.blanc, elevation: 10, padding: 10, width: '85%', alignSelf: 'center'}}>
          <MaterialIcons name="notifications" size={30}  color="blue" />
          <Text style={{marginTop: 10, fontSize: 12, marginHorizontal: 20}}>Cette publication a bien été enregistrée dans la timeline de votre profil</Text>

          <TouchableOpacity style={{marginTop: 10, paddingVertical: 7, paddingHorizontal: 30, backgroundColor: 'blue', alignSelf: 'center', borderRadius: 5}} onPress={this.toggleModalSave} >
            <Text style={{color: colors.blanc}}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }

  modalBloq = () => {
    return(
      <Modal isVisible={this.state.isModalVisibleBloq}>
        <View style={{backgroundColor: colors.blanc, elevation: 10, width: '100%', alignSelf: 'center'}}>
          <View style={{paddingVertical: 5, paddingHorizontal: 10, flexDirection: 'row', backgroundColor: 'blue', alignItems: 'center', justifyContent: 'space-between'}}>
            <MaterialIcons name="notifications" size={30}  color={colors.blanc} />
            <Text style={{fontSize: 12, color: colors.blanc,}}>Bloquer un abonné</Text>
            <Text></Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20}}>
            <View>
              <Image style={{width: 50, height: 50, borderRadius: 50, alignSelf: 'center'}} source={{uri: this.props.item.user_image}} />
              <Text style={{color: colors.vert, fontSize: 10}}>{this.props.item.username}</Text>
            </View>

            <Text style={{fontSize: 12, width: 200, marginLeft: 20}}>Vous êtes sur le point de bloquer <Text style={{color: colors.vert}}>{this.props.item.username}</Text>. Si vous poursuivez la procedure, vous n'aurez plus acces au contenu que cet abonné partage.</Text>
          </View>

          <View style={{paddingHorizontal: 30}}>
            <Text style={{fontSize: 12}}>Motif du bloquage</Text>
            <TextInput style={{height: 50, borderWidth: 2, borderColor: 'blue'}} />
          </View>

          <TouchableOpacity style={{marginTop: 10, marginBottom: 20, paddingVertical: 7, paddingHorizontal: 30, backgroundColor: 'blue', alignSelf: 'center', borderRadius: 5}} onPress={this.toggleModalBloq} >
            <Text style={{color: colors.blanc}}>Bloquer</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }

  // modalSignal = () => {
  //   return(
  //     <Modal isVisible={this.state.isModalVisibleSignal}>
  //       <View style={{backgroundColor: colors.blanc, elevation: 10, width: '100%', alignSelf: 'center'}}>
  //         <View style={{paddingVertical: 5, paddingHorizontal: 10, flexDirection: 'row', backgroundColor: 'blue', alignItems: 'center', justifyContent: 'space-between'}}>
  //           <Foundation name="alert" size={30}  color={colors.blanc} />
  //           <Text style={{fontSize: 12, color: colors.blanc,}}>Signaler une publication</Text>
  //           <Text></Text>
  //         </View>

  //         <View style={{marginHorizontal: 10, marginTop: 5}}>
  //           <Text style={{fontSize: 12, marginBottom: 30}}>Je signal ce contenu parce qu'il semble être:</Text>

  //           <View style={{borderColor: '#b2b2b2', borderWidth: 1, paddingVertical: 20}}>
  //             <Text style={{backgroundColor: colors.blanc, paddingHorizontal: 10, position: 'absolute', fontSize: 12, marginTop: -10, marginLeft: 10}}>Motifs</Text>
  //             <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', paddingHorizontal: 10}}>

                
  //               <View style={{flexDirection: 'row', alignItems: 'center'}}>
  //                 <Text style={{fontSize: 10}}>Sucide ou automutilition</Text>
  //                 <CheckBox
  //                     disabled={false}
  //                     value={this.state.toggleCheckBox1}
  //                     onValueChange={(value) => this.setState({toggleCheckBox1: value})}
  //                   />
  //               </View>

  //               <View style={{flexDirection: 'row', alignItems: 'center'}}>
  //                 <Text style={{fontSize: 10}}>Vente interdite</Text>
  //                 <CheckBox
  //                     disabled={false}
  //                     value={this.state.toggleCheckBox2}
  //                     onValueChange={(value) => this.setState({toggleCheckBox2: value})}
  //                   />
  //               </View>

  //               <View style={{flexDirection: 'row', alignItems: 'center'}}>
  //                 <Text style={{fontSize: 10}}>Discours incitant à la haine</Text>
  //                 <CheckBox
  //                     disabled={false}
  //                     value={this.state.toggleCheckBox3}
  //                     onValueChange={(value) => this.setState({toggleCheckBox3: value})}
  //                   />
  //               </View>

  //               <View style={{flexDirection: 'row', alignItems: 'center'}}>
  //                 <Text style={{fontSize: 10}}>Usurption d'identité</Text>
  //                 <CheckBox
  //                     disabled={false}
  //                     value={this.state.toggleCheckBox4}
  //                     onValueChange={(value) => this.setState({toggleCheckBox4: value})}
  //                   />
  //               </View>

  //               <View style={{flexDirection: 'row', alignItems: 'center'}}>
  //                 <Text style={{fontSize: 10}}>Contenue innaproprié</Text>
  //                 <CheckBox
  //                     disabled={false}
  //                     value={this.state.toggleCheckBox5}
  //                     onValueChange={(value) => this.setState({toggleCheckBox5: value})}
  //                   />
  //               </View>

  //               <View style={{flexDirection: 'row', alignItems: 'center'}}>
  //                 <Text style={{fontSize: 10}}>Harcèlement</Text>
  //                 <CheckBox
  //                     disabled={false}
  //                     value={this.state.toggleCheckBox6}
  //                     onValueChange={(value) => this.setState({toggleCheckBox6: value})}
  //                   />
  //               </View>
  //             </View>

  //             <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, marginTop: 10}}>
  //               <Text style={{fontSize: 12}}>Autre</Text>
  //               <TextInput style={{width: '85%', height: 50, borderWidth: 1, borderColor: '#b2b2b2'}} />
  //             </View>

  //           </View>
  //         </View>

  //         <TouchableOpacity style={{marginTop: 10, marginBottom: 20, paddingVertical: 7, paddingHorizontal: 30, backgroundColor: 'blue', alignSelf: 'center', borderRadius: 5}} onPress={this.toggleModalSignal} >
  //           <Text style={{color: colors.blanc}}>Bloquer</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </Modal>
  //   )
  // }

  toggleModalSave = () => {
    this.setState({isModalVisibleSave: !this.state.isModalVisibleSave})
    this.closeMore()
  }

  toggleModalBloq = () => {
    this.setState({isModalVisibleBloq: !this.state.isModalVisibleBloq})
    this.closeMore()
  }

  toggleModalSignal = () => {
    this.setState({isModalVisibleSignal: !this.state.isModalVisibleSignal})
    this.closeMore()
  }

  more = () => {
    return(
      <View style={{opacity: this.state.opacity, elevation: 20, backgroundColor: '#f0efef', position: 'absolute', alignSelf: 'flex-end'}}>
        <TouchableOpacity onPress={this.toggleModalSave} style={{flexDirection: 'row', padding: 10, alignItems: 'center', backgroundColor: colors.blanc, marginBottom: 3}}>
            <MaterialIcons name="save" size={25} color="blue" />
            <Text>Enregistrer sur mon profil</Text>
        </TouchableOpacity>
        <View>
        <TouchableOpacity onPress={this.toggleModalSignal} style={{flexDirection: 'row', padding: 10, alignItems: 'center', backgroundColor: colors.blanc, marginBottom: 3}}>
            <Foundation name="alert" size={25} color="blue" />
            <Text>Signaler la publication</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.toggleModalBloq} style={{flexDirection: 'row', padding: 10, alignItems: 'center', backgroundColor: colors.blanc, marginBottom: 3}}>
            <MaterialIcons name="save" size={25} color="blue" />
            <Text>Bloquer l'expediteur</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', padding: 10, alignItems: 'center', backgroundColor: colors.blanc,}}>
            <MaterialCommunityIcons name="close-circle" size={25} color="blue" />
            <Text>Ne plus voir cette publication</Text>
        </View>
        
      </View>
    )
  }

  openMore = () => {
    this.setState({opacity: 1})
  }

  closeMore = () => {
    this.setState({opacity: 0})
  }

  render() {

    const item = this.props.item

    return (
      <View style={styles.container}>

      {this.more()}
    
      {this.modalSave()}

      {this.modalBloq()}

      {/* {this.modalSignal()} */}

        <View style={styles.top}>
            <View style={styles.left}>
                <Image style={styles.image} source={{uri: item.user_image}} />
                <View>
                    <Text style={{color: colors.vert}}>{item.username}</Text>
                    <Text style={{color: colors.vert}}>{item.hours}h <MaterialIcons name="watch-later" size={20} color={colors.vert} /> </Text>
                </View>
            </View>

            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome name="comments" size={20} color={colors.vert} />
                    <Text style={{marginLeft: 2}}>{item.num_comment}</Text>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 10}}>
                    <AntDesign name="like2" size={20} color={colors.vert} />
                    <Text>{item.num_like}</Text>
                </View>
            </View>

            <MaterialIcons onPress={this.openMore} name="more-vert" size={20} color={colors.vert} />
        </View>

        <Text style={{marginLeft: 15}}>{item.user_post_comment}</Text>

        <Image style={styles.image_post} source={{uri: item.user_post}} />

        <View style={styles.bottom}>
            <Image style={styles.user} source={require('../../assets/user.png')} />
            <TextInput style={{backgroundColor: '#f0efef', width: '80%', padding: 5, borderRadius: 3, marginRight: 10}} placeholder="Laisser un commentaire" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    container: {
        paddingVertical: 7,
        marginTop: 5,
        backgroundColor: colors.blanc
    },

    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    top: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    },

    image_post: {
        marginTop: 10,
        width: '100%',
        height: 230
    },

    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 10
    },

    user: {
        width: 40,
        height: 40
    }


})

export default Posts;

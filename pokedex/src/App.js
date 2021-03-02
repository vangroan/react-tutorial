import React from 'react';
import { Container, Segment, Menu, Visibility, Divider, Image } from 'semantic-ui-react';

import PokeList from './components/PokeList';

// import logo from './logo.svg';
import logo from 'Poke_Ball.png';
import './App.css';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false,
      stickMenu: false,
    };
  }

  setVisible = menuVisible => {
    console.log("menuVisible", menuVisible);
    this.setState({ menuVisible });
  }

  stickMenu = () => this.setState({ stickMenu: true });
  unstickMenu = () => this.setState({ stickMenu: false });

  render = () => {
    const { stickMenu } = this.state;

    return (
      <div>
        <Visibility
          once={false}
          onBottomPassed={this.stickMenu}
          onBottomPassedReverse={this.unstickMenu}
        >
          <Segment
            inverted
            vertical
            style={{ minheight: 700 }}>
            <Menu
              fixed={stickMenu ? "top" : null}
              inverted={!stickMenu}
              secondary={!stickMenu}
              size="large"
            >
              <Container>
                <Menu.Item>
                  <Image src={logo} size="tiny" />
                </Menu.Item>
                <Menu.Item header>Project Name</Menu.Item>

                <Menu.Menu position="right">
                  <Menu.Item active as="a">Home</Menu.Item>
                  <Menu.Item as="a">About</Menu.Item>
                </Menu.Menu>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        <Container text style={{ marginTop: "2em", marginBottom: "2em" }}>
          <PokeList />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id felis felis. Curabitur eu leo eget purus imperdiet semper. Donec non ex at neque fringilla ultrices et ac libero. Proin eget ante eleifend, accumsan dolor vel, mollis metus. Morbi ac facilisis urna, nec varius nisl. Praesent ultrices, ante ut pretium pretium, risus quam feugiat nulla, eget aliquet ligula lectus in ante. Quisque nec aliquam tortor. Mauris at erat mauris. Phasellus eget interdum mauris, id congue sapien. Quisque hendrerit ligula quam, a aliquam nisi dignissim ac. Quisque quam felis, maximus vitae porttitor non, varius et tellus. Sed suscipit purus eu sollicitudin maximus. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus quam nibh, porta malesuada mauris vel, mattis dictum nunc.</p>
          <p>Donec ullamcorper, magna eget volutpat euismod, orci est suscipit eros, eget pharetra velit sapien vitae est. Quisque semper nibh eu ante pellentesque pretium. Integer lacinia eget eros id feugiat. Aliquam nulla enim, blandit sed accumsan in, molestie sit amet lectus. Phasellus dictum nisi quis malesuada pellentesque. Fusce non nunc elementum, pharetra nisi a, facilisis lorem. Etiam aliquet justo non lacus euismod, eget sagittis ex fermentum. Maecenas sem dolor, cursus ut dignissim imperdiet, sollicitudin vitae urna. Morbi aliquam augue magna, nec lobortis est volutpat id. Nam ac mattis nunc. Integer pulvinar metus a elit volutpat rutrum. Pellentesque aliquet tortor non congue cursus. Ut id lorem consequat, venenatis ligula quis, condimentum eros.</p>
          <p>Nulla at tempor nisl. Donec facilisis sit amet nunc vel tempor. Duis a neque at ante rutrum sollicitudin. Aliquam erat volutpat. Ut facilisis pretium nulla a sollicitudin. Integer ornare aliquam erat, rhoncus volutpat elit feugiat sed. Vestibulum hendrerit aliquam lectus, non pharetra turpis interdum vitae.</p>
          <p>Ut laoreet augue non venenatis porttitor. Aenean vitae ante vitae nulla euismod tristique ac sit amet tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. In pretium, sapien eu ornare egestas, libero quam efficitur urna, sed lacinia ex turpis vitae ex. Morbi fermentum, dolor a condimentum posuere, dui est ultrices quam, molestie placerat lectus nulla eu leo. Cras vitae nisl velit. Pellentesque varius dolor vitae fringilla lobortis. Duis nec dictum est. Maecenas vel dolor quis nibh molestie gravida eget id nulla. Praesent eu elit nec erat fringilla congue. Aliquam rhoncus tempus ullamcorper. Morbi ut volutpat justo. Etiam tempus aliquet ligula, nec lobortis sem bibendum non. Proin pretium interdum tortor, ac blandit tellus semper a. Nullam porta dui vitae dui dapibus vehicula. Aliquam pharetra hendrerit mauris ac gravida.</p>
          <p>Fusce interdum, quam vel semper sodales, diam sem imperdiet purus, vitae viverra libero lacus eget ante. Ut vitae porta nisi, ac lacinia elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae diam sagittis ipsum facilisis convallis non vulputate mauris. Donec posuere, nisi vitae tempus dictum, augue sapien feugiat elit, faucibus ultrices mi massa ut leo. Nunc consequat accumsan sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed rutrum augue. Pellentesque pretium scelerisque laoreet. Aenean vitae diam ipsum. Nullam vel pharetra ligula. Sed blandit lacus vel lorem scelerisque, eu iaculis felis vulputate.</p>
          <Divider />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id felis felis. Curabitur eu leo eget purus imperdiet semper. Donec non ex at neque fringilla ultrices et ac libero. Proin eget ante eleifend, accumsan dolor vel, mollis metus. Morbi ac facilisis urna, nec varius nisl. Praesent ultrices, ante ut pretium pretium, risus quam feugiat nulla, eget aliquet ligula lectus in ante. Quisque nec aliquam tortor. Mauris at erat mauris. Phasellus eget interdum mauris, id congue sapien. Quisque hendrerit ligula quam, a aliquam nisi dignissim ac. Quisque quam felis, maximus vitae porttitor non, varius et tellus. Sed suscipit purus eu sollicitudin maximus. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus quam nibh, porta malesuada mauris vel, mattis dictum nunc.</p>
          <p>Donec ullamcorper, magna eget volutpat euismod, orci est suscipit eros, eget pharetra velit sapien vitae est. Quisque semper nibh eu ante pellentesque pretium. Integer lacinia eget eros id feugiat. Aliquam nulla enim, blandit sed accumsan in, molestie sit amet lectus. Phasellus dictum nisi quis malesuada pellentesque. Fusce non nunc elementum, pharetra nisi a, facilisis lorem. Etiam aliquet justo non lacus euismod, eget sagittis ex fermentum. Maecenas sem dolor, cursus ut dignissim imperdiet, sollicitudin vitae urna. Morbi aliquam augue magna, nec lobortis est volutpat id. Nam ac mattis nunc. Integer pulvinar metus a elit volutpat rutrum. Pellentesque aliquet tortor non congue cursus. Ut id lorem consequat, venenatis ligula quis, condimentum eros.</p>
          <p>Nulla at tempor nisl. Donec facilisis sit amet nunc vel tempor. Duis a neque at ante rutrum sollicitudin. Aliquam erat volutpat. Ut facilisis pretium nulla a sollicitudin. Integer ornare aliquam erat, rhoncus volutpat elit feugiat sed. Vestibulum hendrerit aliquam lectus, non pharetra turpis interdum vitae.</p>
          <p>Ut laoreet augue non venenatis porttitor. Aenean vitae ante vitae nulla euismod tristique ac sit amet tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. In pretium, sapien eu ornare egestas, libero quam efficitur urna, sed lacinia ex turpis vitae ex. Morbi fermentum, dolor a condimentum posuere, dui est ultrices quam, molestie placerat lectus nulla eu leo. Cras vitae nisl velit. Pellentesque varius dolor vitae fringilla lobortis. Duis nec dictum est. Maecenas vel dolor quis nibh molestie gravida eget id nulla. Praesent eu elit nec erat fringilla congue. Aliquam rhoncus tempus ullamcorper. Morbi ut volutpat justo. Etiam tempus aliquet ligula, nec lobortis sem bibendum non. Proin pretium interdum tortor, ac blandit tellus semper a. Nullam porta dui vitae dui dapibus vehicula. Aliquam pharetra hendrerit mauris ac gravida.</p>
          <p>Fusce interdum, quam vel semper sodales, diam sem imperdiet purus, vitae viverra libero lacus eget ante. Ut vitae porta nisi, ac lacinia elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae diam sagittis ipsum facilisis convallis non vulputate mauris. Donec posuere, nisi vitae tempus dictum, augue sapien feugiat elit, faucibus ultrices mi massa ut leo. Nunc consequat accumsan sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed rutrum augue. Pellentesque pretium scelerisque laoreet. Aenean vitae diam ipsum. Nullam vel pharetra ligula. Sed blandit lacus vel lorem scelerisque, eu iaculis felis vulputate.</p>
        </Container>

        <Container text textAlign="center" style={{ paddingBottom: "2em" }}>
          Copyright &#169; 2021
        </Container>
      </div >
    );
  };
}

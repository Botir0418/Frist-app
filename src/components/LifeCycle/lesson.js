import React from 'react';

class Lesson extends React.Component {
        constructor(props) {
          super(props);
          this.state = {favoritecolor: "red"};
        }
        // static getDerivedStateFromProps(props, state) {
        //     return {favoritecolor: props.favcol };
        //   }

        // componentDidMount() {
        //     setTimeout(() => {
        //       this.setState({favoritecolor: "yellow"})
        //     }, 3000)
        //   }

        
        render() {
          return (
            <div>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            </div>
          );
        }
      }
      
export default Lesson;

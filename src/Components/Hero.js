import React, { Component } from "react";
import NewModal from "../Components/NewModal";

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      motivatingQuotes: [
        {
          quote: "Nothing is impossible, the word itself says “I’m possible”!",
          author: "Audrey Hepburn"
        },
        {
          quote:
            "Whether you think you can or you think you can’t, you’re right.",
          author: "Henry Ford"
        },
        {
          quote:
            "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
          author: "Oprah Winfrey"
        },
        {
          quote:
            "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.",
          author: "Jimmy Dean"
        },
        {
          quote: "Believe you can and you’re halfway there.",
          author: "Theodore Roosevelt"
        },
        {
          quote:
            "Too many of us are not living our dreams because we are living our fears.",
          author: "Les Brown"
        },
        {
          quote: "Do or do not. There is no try.",
          author: "Yoda"
        },
        {
          quote:
            "Whatever the mind of man can conceive and believe, it can achieve.",
          author: "Napoleon Hill"
        },
        {
          quote:
            "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
          author: "Mark Twain"
        },
        {
          quote:
            "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
          author: "Michael Jordan"
        }
      ]
    };
  }

  getRandomQuote = () => {
    var listLength = this.state.motivatingQuotes.length;
    var randomIndex = Math.floor(Math.random() * listLength);
    return this.state.motivatingQuotes[randomIndex];
  };

  toggleModal = event => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  render() {
    var randomQuote = this.getRandomQuote();

    return (
      <React.Fragment>
        <section className="hero is-primary is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-two-thirds is-left">
                  <p className="title">{randomQuote.quote}</p>
                  <p className="subtitle">{randomQuote.author}</p>
                </div>
                <div className="column is-one-third is-right">
                  <div className="control">
                    <a
                      id="new-to-do-item"
                      className="button is-white is-outlined is-large "
                      onClick={this.toggleModal}
                    >
                      New To Do Item
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <NewModal
          modalOpen={this.state.isModalOpen}
          toggleModal={this.toggleModal}
          addNewItem={this.props.addNewItem}
        />
      </React.Fragment>
    );
  }
}

export default Hero;

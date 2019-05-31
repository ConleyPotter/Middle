import { connect } from "react-redux";
import MostPopularArticles from "./most_popular_articles";

const msp = (state, ownProps) => ({
  errors: state.errors.articles,
  articles: Object.values(state.entities.articles)
});

const mdp = dispatch => ({
  // here is where I'd make a call to fetch the articles with the most claps
});

export default connect(
  msp,
  mdp
)(MostPopularArticles);

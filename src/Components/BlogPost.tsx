import React from "react";
import butter from "../butter-client";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface BlogPostState {
  data: any;
}

interface BlogPostParams {
  post: any;
}

class BlogPost extends React.Component<
  RouteComponentProps<BlogPostParams>,
  BlogPostState
> {
  constructor(props: any) {
    super(props);
    this.state = { data: {} };
  }

  async componentDidMount() {
    const { match } = this.props;
    const resp = await butter.post.retrieve(match.params.post);
    this.setState(resp.data);
  }

  render() {
    const post = this.state.data;

    return (
      <div className="blog_post">
        <title>{post.seo_title}</title>
        <meta name="description" content={post.meta_description} />
        <meta name="og:image" content={post.featured_image} />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    );
  }
}

export default withRouter(BlogPost);

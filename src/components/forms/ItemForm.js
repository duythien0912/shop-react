import React from "react";
import PropTypes from "prop-types";
import {
  Form,
  Button,
  Grid,
  Segment,
  Image
} from "semantic-ui-react";
import InlineError from "../messages/InlineError";

const propTypes = {
  submit: PropTypes.func.isRequired,
  item: PropTypes.shape({
    albumId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    thumbnailUrl: PropTypes.string.isRequired
  }).isRequired
};

class ItemForm extends React.Component {
  state = {
    data: {
      albumId: this.props.item.albumId,
      id: this.props.item.id,
      title: this.props.item.title,
      url0: this.props.item.url[0],
      thumbnailUrl: this.props.item.thumbnailUrl
    },
    url: this.props.item.url,
    index: 0,
    loading: false,
    errors: {}
  };

  componentWillReceiveProps(props) {
    this.setState({
      data: {
        albumId: props.item.albumId,
        id: props.item.id,
        title: props.item.title,
        url0: props.item.url[0],
        thumbnailUrl: props.item.thumbnailUrl
      },
      url: props.item.url
    });
  }

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onChangeNumber = e =>
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: parseInt(e.target.value, 10)
      }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data).catch(err =>
        this.setState({
          errors: err.response.data.errors,
          loading: false
        })
      );
    }
  };

  changeUrl = () => {
    const { index, url } = this.state;
    const newIndex = index + 1 >= url.length ? 0 : index + 1;
    this.setState({
      index: newIndex,
      data: { ...this.state.date, url0: url[newIndex] }
    });
  };

  validate = data => {
    const errors = {};
    if (!data.title) errors.title = "Can't be black";
    if (!data.url) errors.url = "Can't be black";
    if (!data.thumbnailUrl) errors.thumbnailUrl = "Can't be black";
    return errors;
  };

  render() {
    const { data, loading, errors } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Form.Field error={!!errors.title}>
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Your new Title"
                    value={data.title}
                    onChange={this.onChange}
                  />
                  {errors.title && (
                    <InlineError text={errors.title} />
                  )}
                </Form.Field>

                <Form.Field error={!!errors.url}>
                  <label htmlFor="url">Url</label>
                  <input
                    type="url"
                    id="url"
                    name="url"
                    placeholder="Your new Url"
                    value={data.url0}
                    onChange={this.onChange}
                  />
                  {errors.url && <InlineError text={errors.url} />}
                </Form.Field>

                <Form.Field error={!!errors.thumbnailUrl}>
                  <label htmlFor="thumbnailUrl">ThumbnailUrl</label>
                  <input
                    type="url"
                    id="thumbnailUrl"
                    name="thumbnailUrl"
                    placeholder="Your new thumbnailUrl"
                    value={data.thumbnailUrl}
                    onChange={this.onChange}
                  />
                  {errors.thumbnailUrl && (
                    <InlineError text={errors.thumbnailUrl} />
                  )}
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Image size="small" src={data.url0} />
                {this.state.url.length > 1 && (
                  <a
                    role="button"
                    tabIndex={0}
                    onClick={this.changeUrl}
                  >
                    More img
                  </a>
                )}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Button primary>Save</Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

ItemForm.propTypes = propTypes;

export default ItemForm;

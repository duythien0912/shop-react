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
  anime: PropTypes.shape({
    seriesAnimedbId: PropTypes.string.isRequired,
    seriesTitle: PropTypes.string.isRequired,
    seriesSynonyms: PropTypes.string.isRequired,
    seriesEpisodes: PropTypes.string.isRequired,
    seriesStatus: PropTypes.string.isRequired,
    seriesStart: PropTypes.string.isRequired,
    seriesEnd: PropTypes.string.isRequired,
    seriesImage: PropTypes.string.isRequired
  }).isRequired
};

class ItemForm extends React.Component {
  state = {
    data: {
      seriesAnimedbId: this.props.anime.seriesAnimedbId,
      seriesTitle: this.props.anime.seriesTitle,
      seriesSynonyms: this.props.anime.seriesSynonyms,
      seriesEpisodes: this.props.anime.seriesEpisodes,
      seriesStatus: this.props.anime.seriesStatus,
      seriesStart: this.props.anime.seriesStart,
      seriesEnd: this.props.anime.seriesEnd,
      seriesImage: this.props.anime.seriesImage
    },
    seriesImage: this.props.anime.seriesImage,
    index: 0,
    loading: false,
    errors: {}
  };

  componentWillReceiveProps(props) {
    this.setState({
      data: {
        /*        albumId: props.anime.seriesAnimedbId,
        id: props.anime.seriesTitle,
        title: props.anime.seriesSynonyms,
        seriesImage0: props.anime.seriesImage[0],
        thumbnailUrl: props.anime.thumbnailUrl */

        seriesAnimedbId: props.anime.seriesAnimedbId,
        seriesTitle: props.anime.seriesTitle,
        seriesSynonyms: props.anime.seriesSynonyms,
        seriesEpisodes: props.anime.seriesEpisodes,
        seriesStatus: props.anime.seriesStatus,
        seriesStart: props.anime.seriesStart,
        seriesEnd: props.anime.seriesEnd,
        seriesImage: props.anime.seriesImage
      },
      seriesImage: props.anime.seriesImage
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
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({
            errors: err.response.data.errors,
            loading: false
          })
        );
    }
  };

  changeUrl = () => {
    const { index, seriesImage } = this.state;
    const newIndex = index + 1 >= seriesImage.length ? 0 : index + 1;
    this.setState({
      index: newIndex,
      data: {
        ...this.state.date,
        seriesImage: seriesImage[newIndex]
      }
    });
  };

  validate = data => {
    const errors = {};
    if (!data.seriesAnimedbId)
      errors.seriesAnimedbId = "Can't be black";
    if (!data.seriesTitle) errors.seriesTitle = "Can't be black";
    if (!data.seriesSynonyms)
      errors.seriesSynonyms = "Can't be black";
    if (!data.seriesEpisodes)
      errors.seriesEpisodes = "Can't be black";
    if (!data.seriesStatus) errors.seriesStatus = "Can't be black";
    /*    if (!data.seriesStart) errors.seriesStart = "Can't be black";
    if (!data.seriesEnd) errors.seriesEnd = "Can't be black"; */
    if (!data.seriesImage) errors.seriesImage = "Can't be black";
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
                <Form.Field error={!!errors.seriesTitle}>
                  <label htmlFor="seriesTitle">Series Title</label>
                  <input
                    type="text"
                    id="seriesTitle"
                    name="seriesTitle"
                    placeholder="Your new seriesTitle"
                    value={data.seriesTitle}
                    onChange={this.onChange}
                  />
                  {errors.title && (
                    <InlineError text={errors.seriesTitle} />
                  )}
                </Form.Field>

                <Form.Field error={!!errors.seriesSynonyms}>
                  <label htmlFor="seriesSynonyms">
                    Series Synonyms
                  </label>
                  <input
                    type="text"
                    id="seriesSynonyms"
                    name="seriesSynonyms"
                    placeholder="Your new Series Synonyms"
                    value={data.seriesSynonyms}
                    onChange={this.onChange}
                  />
                  {errors.title && (
                    <InlineError text={errors.seriesSynonyms} />
                  )}
                </Form.Field>

                <Form.Field error={!!errors.seriesEpisodes}>
                  <label htmlFor="seriesEpisodes">
                    Series Episodes
                  </label>
                  <input
                    type="text"
                    id="seriesEpisodes"
                    name="seriesEpisodes"
                    placeholder="Your new Series Episodes"
                    value={data.seriesEpisodes}
                    onChange={this.onChange}
                  />
                  {errors.title && (
                    <InlineError text={errors.seriesEpisodes} />
                  )}
                </Form.Field>

                <Form.Field error={!!errors.seriesStatus}>
                  <label htmlFor="seriesStatus">Series Status</label>
                  <input
                    type="text"
                    id="seriesStatus"
                    name="seriesStatus"
                    placeholder="Your new Series Status"
                    value={data.seriesStatus}
                    onChange={this.onChange}
                  />
                  {errors.title && (
                    <InlineError text={errors.seriesStatus} />
                  )}
                </Form.Field>

                {/*          <Form.Field error={!!errors.thumbnailUrl}>
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
                </Form.Field> */}
              </Grid.Column>
              <Grid.Column>
                <Image size="medium" src={data.seriesImage} />
                {this.state.seriesImage.length > 1 && (
                  <a
                    role="button"
                    tabIndex={0}
                    onClick={this.changeUrl}
                  >
                    More img
                  </a>
                )}
                <Form.Field error={!!errors.seriesImage}>
                  <label htmlFor="seriesImage">Series Image</label>
                  <input
                    type="url"
                    id="seriesImage"
                    name="seriesImage"
                    placeholder="Your new seriesImage"
                    value={data.seriesImage}
                    onChange={this.onChange}
                  />
                  {errors.seriesImage && (
                    <InlineError text={errors.seriesImage} />
                  )}
                </Form.Field>
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

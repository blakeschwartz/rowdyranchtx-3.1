
import React from 'react'
import {Link} from 'react-router-dom'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

let styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 600,
    height: 800,
    overflowY: 'auto'
  }
}

export default ({ goats }) => {
  return (
    <div style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        {goats.map((goat) => {
          image = null

          if (goat.image) {
            image = '/image/' + goat.image
          }
          else {
            image = '/image/NubianGoatLogo-128.png'
          }

          <GridTile
            key={goat.rrid}
            title={<span>{goat.name} <i><small>({goat.breed})</small></i></span>}
            //subtitle={<i>{goat.breed}</i>}
            titlePosition="bottom"
            titleStyle={styles.titleStyle}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          >
            <Link to={"/goats/#{goat.rrid}"}><img src={image} /></Link>
          </GridTile>
        })}
      </GridList>
    </div>
  )
}
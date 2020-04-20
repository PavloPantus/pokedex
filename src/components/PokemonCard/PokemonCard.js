/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import classes from './PokemonCard.module.scss';
import { TagsStoreContext } from '../../store/tagsStore';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const PokemonCard = ({ id, name, types, stats }) => {
  const TagsStore = useContext(TagsStoreContext);

  return (
    <div className={classes.pokemon}>
      <LazyLoadImage
        placeholderSrc={'http://placehold.it/250x250/ffffff&text=not_loaded'}
        effect="blur"
        className={classes.pokemon__avatar}
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        alt={name}
      />

      <table className={classes['pokemon__description-section']}>
        <thead>
          <tr>
            <th className={classes.pokemon__property}>
            name:
            </th>
            <td className={classes.pokemon__name}>
              {name}
            </td>
          </tr>
        </thead>
      </table>

      <table className={classes['pokemon__description-section']}>
        <thead>
          <tr>
            <th className={classes.pokemon__property}>
            type:
            </th>

            <td className={classes.pokemon__type}>
              {
                types.map(type => (
                  <span
                    style={{ color: TagsStore.tags
                      .find(tag => tag.name === type.type.name).color }}
                    key={type.type.name}
                  >
                    {type.type.name}
                    {' '}
                  </span>
                ))
              }
            </td>
          </tr>
        </thead>
      </table>

      <div className={classes['pokemon__property-heading']}>
        pokemon stats:
      </div>

      <table
        className={`${classes.pokemon__stats}
         ${classes['pokemon-stats']}`}
      >

        <thead>
          {stats.map(stat => (
            <tr key={stat.stat.name}>
              <th>
                {' '}
                {stat.stat.name}
                {' '}
              </th>
              <td>
                <div className={classes['pokemon-stats__sub-props']}>
                  <span className={classes['pokemon-stats__key']}>
              base_stat:
                    {' '}
                  </span>
                  <span
                    className={classes['pokemon-stats__value']}
                  >
                    {stat.base_stat}
                  </span>
                </div>
                <div className={classes['pokemon-stats__sub-props']}>
                  <span className={classes['pokemon-stats__key']}>
              effort:
                    {' '}
                  </span>
                  <span className={classes['pokemon-stats__value']}>
                    {stat.effort}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </thead>
      </table>

    </div>
  );
};

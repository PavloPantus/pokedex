import React from 'react';
import classes from './PokemonCard.module.scss';

export const PokemonCard = () => (
  <div className={classes.pokemon}>
    <img
      className={classes.pokemon__avatar}
      src="https://pokeres.bastionbot.org/images/pokemon/11.png"
      alt="pokemonName"
    />

    <table className={classes['pokemon__description-section']}>
      <tr>
        <th className={classes.pokemon__property}>
          name:
        </th>
        <td className={classes.pokemon__name}>
          metapod
        </td>
      </tr>
    </table>

    <table className={classes['pokemon__description-section']}>
      <tr>
        <th className={classes.pokemon__property}>
          type:
        </th>

        <td className={classes.pokemon__type}>
          normal
        </td>
      </tr>
    </table>

    <div className={classes['pokemon__property-heading']}>
      pokemon stats:
    </div>

    <table className={`${classes.pokemon__stats} ${classes['pokemon-stats']}`}>

      <tr>
        <th> special defence </th>
        <td>
          <div className={classes['pokemon-stats__sub-props']}>
            <span className={classes['pokemon-stats__key']}>
base_stat:
              {' '}
            </span>
            <span className={classes['pokemon-stats__value']}>30</span>
          </div>
          <div className={classes['pokemon-stats__sub-props']}>
            <span className={classes['pokemon-stats__key']}>
effort:
              {' '}
            </span>
            <span className={classes['pokemon-stats__value']}>0</span>
          </div>
        </td>
      </tr>

      <tr>
        <th> special defence </th>
        <td>
          <div className={classes['pokemon-stats__sub-props']}>
            <span className={classes['pokemon-stats__key']}>
base_stat:
              {' '}
            </span>
            <span className={classes['pokemon-stats__value']}>30</span>
          </div>
          <div className={classes['pokemon-stats__sub-props']}>
            <span className={classes['pokemon-stats__key']}>
effort:
              {' '}
            </span>
            <span className={classes['pokemon-stats__value']}>0</span>
          </div>
        </td>
      </tr>

      <tr>
        <th> special defence </th>
        <td>
          <div className={classes['pokemon-stats__sub-props']}>
            <span className={classes['pokemon-stats__key']}>
base_stat:
              {' '}
            </span>
            <span className={classes['pokemon-stats__value']}>30</span>
          </div>
          <div className={classes['pokemon-stats__sub-props']}>
            <span className={classes['pokemon-stats__key']}>
effort:
              {' '}
            </span>
            <span className={classes['pokemon-stats__value']}>0</span>
          </div>
        </td>
      </tr>

      <tr>
        <th> special defence </th>
        <td>
          <div className={classes['pokemon-stats__sub-props']}>
            <span className={classes['pokemon-stats__key']}>
base_stat:
              {' '}
            </span>
            <span className={classes['pokemon-stats__value']}>30</span>
          </div>
          <div className={classes['pokemon-stats__sub-props']}>
            <span className={classes['pokemon-stats__key']}>
effort:
              {' '}
            </span>
            <span className={classes['pokemon-stats__value']}>0</span>
          </div>
        </td>
      </tr>

      <tr>
        <th> special defence </th>
        <td>
          <div className={classes['pokemon-stats__sub-props']}>
            <span className={classes['pokemon-stats__key']}>
base_stat:
              {' '}
            </span>
            <span className={classes['pokemon-stats__value']}>30</span>
          </div>
          <div className={classes['pokemon-stats__sub-props']}>
            <span className={classes['pokemon-stats__key']}>
effort:
              {' '}
            </span>
            <span className={classes['pokemon-stats__value']}>0</span>
          </div>
        </td>
      </tr>

      <tr>
        <th> special defence </th>
        <td>
          <div className={classes['pokemon-stats__sub-props']}>
            <span className={classes['pokemon-stats__key']}>
base_stat:
              {' '}
            </span>
            <span className={classes['pokemon-stats__value']}>30</span>
          </div>
          <div className={classes['pokemon-stats__sub-props']}>
            <span className={classes['pokemon-stats__key']}>
effort:
              {' '}
            </span>
            <span className={classes['pokemon-stats__value']}>0</span>
          </div>
        </td>
      </tr>

    </table>

  </div>
);

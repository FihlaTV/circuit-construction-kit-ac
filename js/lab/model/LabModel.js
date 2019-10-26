// Copyright 2019, University of Colorado Boulder

/**
 * Model for the Lab Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const circuitConstructionKitAc = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/circuitConstructionKitAc' );
  const CircuitConstructionKitModel = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/model/CircuitConstructionKitModel' );

  class LabModel extends CircuitConstructionKitModel {

    /**
     * TODO: do we really need a class here?
     * @param {Tandem} tandem
     * @constructor
     */
    constructor( tandem ) {
      super( tandem );
    }
  }

  return circuitConstructionKitAc.register( 'LabModel', LabModel );
} );
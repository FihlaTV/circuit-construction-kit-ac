// Copyright 2019-2020, University of Colorado Boulder

/**
 * The view for the RLC screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const CCKCConstants = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/CCKCConstants' );
  const CCKCScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CCKCScreenView' );
  const circuitConstructionKitAc = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/circuitConstructionKitAc' );
  const CircuitElementToolFactory = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CircuitElementToolFactory' );
  const Node = require( 'SCENERY/nodes/Node' );
  const Resistor = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/model/Resistor' );

  class RLCScreenView extends CCKCScreenView {

    /**
     * @param {RLCModel} model
     * @param {Tandem} tandem
     */
    constructor( model, tandem ) {
      const circuitElementToolFactory = new CircuitElementToolFactory( model.circuit, model.showLabelsProperty, model.viewTypeProperty,
        point => this.circuitLayerNode.globalToLocalPoint( point ) );

      const wireToolNode = circuitElementToolFactory.createWireToolNode( CCKCConstants.NUMBER_OF_WIRES, tandem.createTandem( 'wireToolNode' ) );

      // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
      const circuitElementToolNodes = [

        // This page is duplicated in the Lab Screen View
        wireToolNode,
        circuitElementToolFactory.createRightBatteryToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
        circuitElementToolFactory.createACVoltageToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
        circuitElementToolFactory.createLightBulbToolNode( 10, tandem.createTandem( 'lightBulbToolNode' ) ),
        circuitElementToolFactory.createResistorToolNode( 10, Resistor.ResistorType.RESISTOR, tandem.createTandem( 'resistorToolNode' ) ),
        circuitElementToolFactory.createCapacitorToolNode( 10, tandem.createTandem( 'capacitorToolNode' ) ),
        circuitElementToolFactory.createInductorToolNode( 10, tandem.createTandem( 'inductorToolNode' ) ),
        circuitElementToolFactory.createSwitchToolNode( 5, tandem.createTandem( 'switchToolNode' ) ),

        new Node( { children: [ wireToolNode ] } ), // Wire should appear at the top of each carousel page
        circuitElementToolFactory.createFuseToolNode( 10, tandem.createTandem( 'fuseToolNode' ) ),
        circuitElementToolFactory.createDollarBillToolNode( 1, tandem.createTandem( 'dollarBillToolNode' ) ),
        circuitElementToolFactory.createPaperClipToolNode( 1, tandem.createTandem( 'paperClipToolNode' ) ),
        circuitElementToolFactory.createCoinToolNode( 1, tandem.createTandem( 'coinToolNode' ) ),
        circuitElementToolFactory.createEraserToolNode( 1, tandem.createTandem( 'eraserToolNode' ) ),
        circuitElementToolFactory.createPencilToolNode( 1, tandem.createTandem( 'pencilToolNode' ) ),
        circuitElementToolFactory.createHandToolNode( 1, tandem.createTandem( 'handToolNode' ) ),

        new Node( { children: [ wireToolNode ] } ), // Wire should appear at the top of each carousel page
        circuitElementToolFactory.createDogToolNode( 1, tandem.createTandem( 'dogToolNode' ) )
      ];

      super( model, circuitElementToolNodes, tandem, {
        toolboxOrientation: 'vertical', // The toolbox should be vertical
        showResetAllButton: true, // The reset all button should be shown.
        showAdvancedControls: false,
        showCharts: true,
        circuitElementToolboxOptions: {
          itemsPerPage: 8,
          pageHeight: 400
        },
        showStopwatchCheckbox: true,
        hasACandDCVoltageSources: true
      } );
    }
  }

  return circuitConstructionKitAc.register( 'RLCScreenView', RLCScreenView );
} );
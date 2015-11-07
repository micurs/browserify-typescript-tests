/// <reference path="../typings/threejs/three.d.ts"/>
/// <reference path="../typings/react/react.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>

import * as _  from 'lodash';
import * as React from 'react';
import * as THREE from 'three'

interface GlTestProps {
  width: number;
  height: number;
}

export default class GlTest extends React.Component<GlTestProps, {} > {  
    
   _renderer: THREE.WebGLRenderer;
   _scene : THREE.Scene;
   _canvas: JSX.Element;
   _camera: THREE.PerspectiveCamera;
   _mesh: THREE.Mesh;
   
  constructor( props: GlTestProps ) {
    super(props);
    this.state = { 
    }; 
  }
  
  glRender() {
    requestAnimationFrame( this.glRender.bind(this) );
    this._mesh.rotation.x += 0.01;
    this._mesh.rotation.y += 0.02;
    this._renderer.render(this._scene, this._camera);
  }
  
  componentDidMount() {
    var ar = this.props.width / this.props.height;

    // Setup the renderer (canvas WebGl binding)
    this._renderer = new THREE.WebGLRenderer();
    document.getElementById('canvas-frame').appendChild( this._renderer.domElement );
    this._renderer.setSize( this.props.width, this.props.height );

    // Create the scene and one camera
    this._scene = new THREE.Scene();
    this._camera = new THREE.PerspectiveCamera( 80, ar , 0.1, 1000 );
    this._camera.position.z = 2.0;

    /*{
      canvas: document.getElementById('glcanvas') as HTMLCanvasElement //  this.refs['canvas'] as HTMLCanvasElement
    });*/
    
    //this._canvas = renderer.domElement; 
    
    // Creating the geometry to render
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshPhongMaterial( { color: 0x20ff20, shading: THREE.FlatShading } );
    this._mesh = new THREE.Mesh( geometry, material );

    // Create some lighting
    var light = new THREE.DirectionalLight( 0xffffff, 1.0 );
    var alight = new THREE.AmbientLight( 0x303030 );

    this._scene.add( this._mesh );
    this._scene.add( light );
    this._scene.add( alight );

    this.glRender();  // Start rendering every time possible.
  }
  
  render() {
    return <div id="canvas-frame"></div>;
  }
}

 


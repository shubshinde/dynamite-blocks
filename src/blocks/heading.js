import { registerBlockType } from '@wordpress/blocks'
import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n'

registerBlockType(
    'dynamite-blocks/heading', {
        title: __('Heading'),
        icon: 'screenoptions',
        category: 'dynamite-blocks',
        keywords: [ 'Text', 'Title', 'Heading' ],
        attributes: {
            heading: {
                type: 'string',
                default: '',
            },
        },
        edit: ( { attributes, setAttributes } ) => {
            return(
                <div className="dynamite-blocks">
                   <div className="dynamite-wrapper shadow bg-white h-100">

                        <div className="dynamite-block-header">
                            <h5 className='card-header bg-white text-muted'> Heading</h5>
                        </div>

                        <div className="dynamite-block-body p-4">
                            <TextControl
                                className=''
                                label="Title"
                                labelPosition="top"
                                type="text"
                                value={attributes.heading }
                                onChange={ (newValue) => setAttributes({ heading: newValue }) }
                            />
                        </div>

                        <div className="dynamite-block-footer row">
                            <div className="col-lg-9"></div>
                            <div className="col-lg-3">
                                <small style={{ fontSize: '11px', color: '#999' }} className='float-end p-1'>Dynamite Blocks</small>
                            </div>
                            
                        </div>

                   </div>
                </div>
            )
        },
        save: ( { attributes } ) => {
            return(
                <div className="dynamite-blocks">
                   <div className="dynamite-wrapper">
                        <h1>First Block</h1>
                   </div>
                </div>
            )
        }
    } 
)
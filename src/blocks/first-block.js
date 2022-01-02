import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

registerBlockType(
    'dynamite-blocks/first-block', {
        title: __('First Block'),
        icon: 'screenoptions',
        category: 'common',
        keywords: [ 'Hello', 'Gutenberg', 'Hello Gutenberg' ],
        attributes: {},
        edit: ( { attributes, setAttributes } ) => {
            return(
                <div className="dynamite-blocks">
                   <div className="dynamite-wrapper p-3 shadow bg-white card">
                        <h2> First Block</h2>
                        <div className="text-muted">
                            <span className="dashicons dashicons-screenoptions"></span>
                            <span>Dynamite Blocks</span>
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
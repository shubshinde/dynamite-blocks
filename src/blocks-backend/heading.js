// Dynamite Specific
import BlockHeader from "./components/BlockHeader";
import BlockFooter from "./components/BlockFooter";
// Dependencies
import { registerBlockType } from "@wordpress/blocks";
import { TextControl } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

let blockConfig = {
	title: "Heading Block",
	slug: "heading",
	namespace: "dynamite-blocks",
	category: "dynamite-blocks",
	icon: "screenoptions",
	keywords: ["Text", "Title", "Heading"],
	author: "Dynamite Blocks",
};

registerBlockType(`${blockConfig.namespace}/${blockConfig.slug}`, {
	title: blockConfig.title,
	icon: blockConfig.icon,
	category: blockConfig.category,
	keywords: blockConfig.keywords,
	attributes: {
		heading: {
			type: 'string',
			default: '',
		},
	},
	edit: ({ attributes, setAttributes }) => {
		return (
			<div className="dynamite-blocks">
				<div className="dynamite-wrapper shadow bg-white h-100">
					{/* Block Header */}
					<BlockHeader blockTitle={blockConfig.title} />

					{/* Block Body */}
					<div className="dynamite-block-body p-4">
						<TextControl
							className=""
							label="Title"
							labelPosition="top"
							type="text"
							value={attributes.heading}
							onChange={(newValue) => setAttributes({ heading: newValue })}
						/>
					</div>

					{/* Block Footer */}
					<BlockFooter blockAuthor={blockConfig.author} />
				</div>
			</div>
		);
	},
	save: ({ attributes }) => {
		return (
			<div className="dynamite-blocks">
				<div className="dynamite-wrapper">
					<h1>First Block 123</h1>
				</div>
			</div>
		);
	},
});

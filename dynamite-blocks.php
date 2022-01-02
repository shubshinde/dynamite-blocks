<?php

/**
 * Plugin Name: Dynamite Blocks
 * Plugin URI: https://github.com/shubshinde
 * Description: Dynamic blocks for dynamic developers.
 * Author: Shubham Shinde
 * Author URI: https://github.com/shubshinde
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package DynamiteBlocks
 */

if (!defined('ABSPATH')) : exit();
endif;

final class DynamiteBlocks_Class
{

    const VERSION = '1.0.0';

    /**
     * Construct Function.
     */
    private function __construct()
    {
        $this->plugin_constants();

        // Check WordPress Version before registering block category.  
        if (version_compare($GLOBALS['wp_version'], '5.8.0', '<')) {
            add_filter('block_categories', [$this, 'dynamite_blocks_category'], 10, 2);
        } else {
            add_filter('block_categories_all', [$this, 'dynamite_blocks_category'], 10, 2);
        }

        // Include Admin Area Assets.
        add_action('init', [$this, 'enqueue_admin_area_assets']);

        // Init Plugin.
        add_action('plugins_loaded', [$this, 'init_plugin']);
    }

    /**
     * Define plugin constants.
     */
    public function plugin_constants()
    {
        define('DYNAMITE_BLOCKS_VERSION', self::VERSION);
        define('DYNAMITE_BLOCKS_PLUGIN_PATH', trailingslashit(plugin_dir_path(__FILE__)));
        define('DYNAMITE_BLOCKS_PLUGIN_URL', trailingslashit(plugins_url('/', __FILE__)));
    }

    /**
     * Singletone Instance.
     */
    public static function init()
    {
        static $instance = false;
        if (!$instance) {
            $instance = new self();
        }
        return $instance;
    }

    /**
     * Plugin Init.
     */
    public function init_plugin()
    {
        $this->enqueue_scripts();
    }

    /**
     * Enqueue Scripts.
     */
    public function enqueue_scripts()
    {
        add_action('enqueue_block_editor_assets', [$this, 'register_block_editor_assets']);
        add_action('init', [$this, 'register_blocks']);
    }

    /**
     * Regsiter Block Editor Assets.
     */
    public function register_block_editor_assets()
    {
        wp_enqueue_script(
            'dynamite-blocks-starter-script',
            DYNAMITE_BLOCKS_PLUGIN_URL . '/build/index.js',
            [
                'wp-blocks',
                'wp-editor',
                'wp-i18n',
                'wp-element',
                'wp-components',
                'wp-data'
            ],
            filemtime(DYNAMITE_BLOCKS_PLUGIN_PATH . '/build/index.js'),
            true

        );
    }

    /**
     * Enqueue Admin Area Assets.
     */
    public function enqueue_admin_area_assets()
    {
        // Include Dynamite Namespaced Bootstrap css. 
        wp_enqueue_style(
            'dynamite-bootstrap-style',
            DYNAMITE_BLOCKS_PLUGIN_URL . '/assets/css/dynamite-bootstrap.css',
            [],
            false,
            'all'
        );

        wp_enqueue_style(
            'dynamite-admin-backend-style',
            DYNAMITE_BLOCKS_PLUGIN_URL . '/assets/css/dynamite-backend.css',
            [],
            false,
            'all'
        );

        wp_enqueue_script(
            'dynamite-admin-backend-script',
            DYNAMITE_BLOCKS_PLUGIN_URL . '/assets/js/dynamite-backend.js',
            wp_rand(1, 1000000),
            true
        );
    }

    /**
     * Register Blocks.
     */
    public function register_blocks()
    {
        register_block_type('dynamite-blocks/block', [
            'editor_scripts' => 'dynamite-blocks-starter-script'
        ]);
    }

    /**
     * Define Blocks Category.
     */

    function dynamite_blocks_category($categories, $post)
    {
        return array_merge(
            $categories,
            array(
                array(
                    'slug' => 'dynamite-blocks',
                    'title' => __('Dynamite Blocks', 'dynamite-blocks'),
                ),
            )
        );
    }
}

/**
 * Init Main Plugin.
 */
function dynamite_blocks_run_plugin()
{
    return DynamiteBlocks_Class::init();
}
// Run the plugin.
dynamite_blocks_run_plugin();

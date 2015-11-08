# Splitting bundle in reusable components

Sometime we have need to reuse some of the code in multiple pages, but we don't want to 
create a single large bundle that cover the code for all the pages in our site.

In this example we create a components.js bundle containing common React components
used by our site and we split spacific page code in separate js files: page1.js and page2.js
to be used in page1.html and page2.html.

We use another Browserify plugin called [factor-bundle](https://www.npmjs.com/package/factor-bundle) to create entry 
points javascripts files and a common bundle to be used in all the pages.

In gulpfile.js we use the Browserify API to activate tsify and factor-bundle:

    var bify_components_options = {
              entries: [ 'src/page1.tsx', 'src/page2.tsx' ],
              debug: true
            };
    var bify_components = browserify(bify_components_options);
    bify_components.plugin('tsify', { jsx: 'react' })
    bify_components.plugin('factor-bundle', { outputs: [ 'dist/page1.js', 'dist/page2.js' ] })


This way our HTML pages can use 2 bundle scripts: one common to be reused everywhere and one 
specific for the specific code in the page.

    <html>
      <header>
      </header>
      <body>
        <h2>Page 1</h2>
        <h3>Use two bundles to reuse components across pages</h3>
        <div id="out">
          
        </div>
        <script src="dist/components.js"></script>
        <script src="dist/page1.js"></script>
      </body>
    </html>



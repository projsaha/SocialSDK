<script type="text/javascript" src="/sbt.jquery182/development-bundle/jquery-1.8.0.js"></script>
<script type="text/javascript" src="/sbt/js/libs/require.js"></script>

<script type="text/javascript">
requirejs.config({
       paths: {
           'has' : '/sbt/js/libs/has',
           'jquery' : '/sbt.jquery180/development-bundle/jquery-1.8.0',
          'requirejs/i18n' : '/sbt/js/libs/requirejsPlugins/i18n',
           'requirejs/text' : '/sbt/js/libs/requirejsPlugins/text'
        },
        shim : {
            'jquery/ui' : {
                deps : [ 'jquery' ],
                exports : '$'
            }
        }
    });
</script>
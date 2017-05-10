<nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <div class="navbar-header">
            
            <!-- Collapsed Hamburger -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            
            <!-- Branding Image -->
            <a class="navbar-brand" href="{{ url('/') }}">
                {{ config('app.name', 'Laravel') }}
            </a>
        </div>
        
        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            <!-- Left Side Of Navbar -->
    
            <form action="{{ route('search') }}" method="get" class="navbar-form navbar-left">
                <div class="form-group">
                    <input type="text" class="form-control" name="q" placeholder="Search videos..." value="{{ Request::get('q') }}">
                </div>
                <button type="submit" class="btn btn-default"><i class="glyphicon glyphicon-search"></i> Search</button>
            </form>
            
            <ul class="nav navbar-nav">
                @if (!Auth::guest())
                    <li><a href="{{ route('videos.create') }}"><i class="glyphicon glyphicon-plus-sign"></i> Upload Video</a></li>
                    <li><a href="{{ route('competitions.create') }}"><i class="glyphicon glyphicon-plus-sign"></i> Submit Scores</a></li>
                    @permission('watch-athlete')
                        <li><a href="{{ route('athletes.index') }}">My Athletes</a></li>
                    @endpermission
                @endif
            </ul>
            
            <!-- Right Side Of Navbar -->
            <ul class="nav navbar-nav navbar-right">
                <!-- Authentication Links -->
                @if (Auth::guest())
                    <li><a href="{{ route('login') }}">Login</a></li>
                    <li><a href="{{ route('register') }}">Register</a></li>
                @else
                    <li><a href="{{ Auth::user()->linkToAdmin() }}">{{ Auth::user()->rolesString() }}</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            {{ Auth::user()->name }} <span class="caret"></span>
                        </a>
                        
                        <ul class="dropdown-menu" role="menu">
                            @role('athlete')
                            <li><a href="{{ route('videos.index') }}"><i class="glyphicon glyphicon-facetime-video"></i> My Videos</a></li>
                            <li><a href="{{ route('competitions.index') }}"><i class="glyphicon glyphicon-edit"></i> My Scores</a></li>
                            @endrole
                            @permission('view-athletes')
                            <li><a href="{{ route('athletes.search') }}"><i class="glyphicon glyphicon-search"></i> Search Athletes</a></li>
                            @endpermission
                            <li><a href="{{ route('user.index') }}"><i class="glyphicon glyphicon-user"></i> Profile</a></li>
                            @role('owner', 'admin')
                            <li><a href="{{ url('/admin') }}"><i class="glyphicon glyphicon-lock"></i> Admin</a></li>
                            @endrole
                            <li role="separator" class="divider"></li>
                            <li>
                                <a href="{{ route('logout') }}"
                                   onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                    <i class="glyphicon glyphicon-off"></i> Logout
                                </a>
                                
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>
                        </ul>
                    </li>
                @endif
            </ul>
        </div>
    </div>
</nav>
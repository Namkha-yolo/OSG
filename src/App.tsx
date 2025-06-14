import { Switch, Route } from 'wouter';
import Landing  from '@/pages/Landing';
import SignIn   from '@/pages/SignIn';
import Home     from '@/pages/Home';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Switch>
      <Route path="/"       component={Landing} />
      <Route path="/signin" component={SignIn} />
      <Route path="/home"   component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

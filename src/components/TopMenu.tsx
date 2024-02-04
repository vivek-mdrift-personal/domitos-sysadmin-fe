'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Logo from '../../public/cpanel.png';
import { ProfileIcons } from './independent/Profile';

export function TopMenu() {
  const initialState = {
    dashboard: false,
    org: false,
    app: false,
    billing: false,
    metric: false,
    sales: false,
    users: false,
  };
  const [navHighlight, setNavHightLight] = useState(initialState);

  const getURL = () => {
    var url = new URL(window.location.href);
    var args = url.pathname.split('/');
    console.log('Get URL is loaded at', args[1]);
    setNavHightLight(initialState);
    switch (args[1]) {
      case 'dashboard':
        var newNavState = { ...initialState, dashboard: true };
        setNavHightLight(newNavState);
        break;
      case 'organizations':
        var newNavState = { ...initialState, org: true };
        setNavHightLight(newNavState);
        break;
      case 'apps':
        var newNavState = { ...initialState, app: true };
        setNavHightLight(newNavState);
        break;
      case 'billing':
        var newNavState = { ...initialState, billing: true };
        setNavHightLight(newNavState);
        break;
      case 'metrics':
        var newNavState = { ...initialState, metric: true };
        setNavHightLight(newNavState);
        break;
      case 'sales':
        var newNavState = { ...initialState, sales: true };
        setNavHightLight(newNavState);
        break;
      case 'users':
        var newNavState = { ...initialState, users: true };
        setNavHightLight(newNavState);
        break;
    }
  };
  useEffect(() => {
    // Client-side-only code
    getURL();
  }, []);
  return (
    <div className="container m-auto grid grid-cols-9 space-y-1 ">
      <div className="col-span-1 align-middle self-center text-center">
        <Link href="/dashboard">
          <Image
            src={Logo}
            width={'100'}
            className="mt-0 ml-0 col-span-1 align-middle self-center text-center"
            alt="mDrift CPanel"
          />
        </Link>
      </div>
      <div className="col-span-4 lg:col-start-4 align-middle">
        <NavigationMenu className="text-center">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  active={navHighlight.dashboard}
                >
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/organizations" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  active={navHighlight.org}
                >
                  Organizations
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/apps" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  active={navHighlight.app}
                >
                  Apps
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/billing" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  active={navHighlight.billing}
                >
                  Billing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/metrics" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  active={navHighlight.metric}
                >
                  Metrics
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/sales" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  active={navHighlight.sales}
                >
                  Sales
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/users" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  active={navHighlight.users}
                >
                  Users
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>{' '}
      <div className="col-span-2 align-middle self-center text-center gap-2">
        <ProfileIcons />
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

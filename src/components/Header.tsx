"use client";
import { Disclosure, Menu } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
const navigation = [
  { name: "Product", href: "#", current: false },
  { name: "Features", href: "#", current: false },
  { name: "Marketplace", href: "#", current: false },
  { name: "Company", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const users = false;
  const handleSubmit = () => {};
  return (
    <header>
      <Disclosure as="nav" className="bg-blue-800">
        {({ open }) => (
          <>
            <div className=" relative mx-auto max-w-app  sm:py-2  px-2">
              <div className=" flex h-auto flex-col items-center justify-between space-y-2 py-2 md:flex-row md:space-y-0">
                <div className="flex w-full items-center justify-between">
                  <div className="inset-y-0 left-0 flex items-center md:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6 "
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-shrink-0 items-center">
                    <Link
                      href="/"
                      className="cursor-pointer  text-3xl font-bold text-white sm:text-2xl "
                    >
                      Taskid
                    </Link>
                  </div>
                  <div className="hidden items-center  sm:mx-6 sm:w-0 md:flex md:w-full md:flex-1">
                    <div className="flex gap-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-900 hover:text-white",
                            "rounded-md px-3 py-2 text-base font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <form
                      onSubmit={handleSubmit}
                      className=" mx-5 hidden  flex-grow cursor-pointer items-center justify-center rounded-lg border-0 bg-white pl-4 shadow  sm:flex"
                    >
                      <input
                        name="keyword"
                        type="text"
                        placeholder="Search for puroducts, brands and more"
                        className="mt-0 block w-full text-gray-700  flex-shrink flex-grow border-0 px-0.5 focus:outline-none focus:ring-0"
                      />
                      <button
                        type="submit"
                        className="Shadow rounded-r-md px-4 py-2.5 bg-gray-600 text-white focus:outline-none"
                      >
                        <MagnifyingGlassIcon className="h-5 w-5 " />
                      </button>
                    </form>
                  </div>
                  <div className="flex  flex-row items-center space-x-6 pr-2 capitalize  sm:pr-0">
                    {/* Profile dropdown */}
                    <div className="hidden sm:flex">
                      {!users ? (
                        <div className=" relative  rounded-md bg-white p-1.5 px-6 font-semibold text-gray-900 shadow-sm">
                          <Link href="/auth">Login</Link>
                        </div>
                      ) : (
                        <>
                          <Menu as="div" className=" relative">
                            {/*<div>
                              <Menu.Button className=" flex items-center capitalize justify-between space-x-2 rounded-md bg-white p-1.5 px-5 text-base font-semibold text-indigo-600 shadow">
                                <p>{users.name || " Hello Guest"}</p>
                                <UserCircleIcon className="h-7 w-7 " />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute capitalize right-0 mt-4 w-48 origin-top-right rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={uuidv4()}>
                                    {({ active }) => (
                                      <Link
                                        to={item.to}
                                        className={classNames(
                                          active ? "bg-indigo-200" : "",
                                          "flex items-center space-x-2 px-4 py-2 text-base "
                                        )}
                                      >
                                        {item.icon}
                                        <span className="">{item.name}</span>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                                <Menu.Item>
                                  <div
                                    onClick={logoutHandler}
                                    className="  flex border-t space-x-2 bg-indigo-400 rounded-b-md px-4 py-2 text-sm text-white"
                                  >
                                    <LogoutIcon className="h-5" />
                                    <span> Sign out</span>
                                  </div>
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>*/}
                          </Menu>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex w-full md:hidden">
                  <form
                    onSubmit={handleSubmit}
                    className="lg:min-w-xl flex grow items-center justify-center rounded-lg border-0 bg-white  shadow pl-4 md:mx-5 lg:max-w-2xl"
                  >
                    <input
                      name="keyword"
                      type="text"
                      placeholder="Search for puroducts, brands and more"
                      className="mt-0 block w-full text-gray-700  flex-shrink flex-grow border-0 px-0.5 focus:outline-none focus:ring-0"
                    />
                    <button
                      type="submit"
                      className="Shadow-lg  rounded-r-md px-4 py-2.5 bg-gray-600 text-white focus:outline-none"
                    >
                      <MagnifyingGlassIcon className="h-5 w-5 " />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}

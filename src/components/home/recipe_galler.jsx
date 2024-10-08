import { Fragment } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Image,
  CardFooter,
  Skeleton,
} from "@nextui-org/react";
import useRecipe from "../../hooks/useSpanucular";

export default function RecipeGallery() {
  const { recipes, isLoading, error } = useRecipe();

  return (
    <Fragment>
      <section>
        <div className="flex justify-center w-full px-[40px] py-[50pt]">
          <div className="flex w-full flex-col justify-center">
            <Tabs aria-label="Options">
              <Tab key="photos" title="All" className="flex gap-4">
                {isLoading ? (
                  <div className="w-full flex gap-10 my-5">
                    <Card className="w-[20dvw] space-y-5 p-4" radius="lg">
                      <Skeleton className="rounded-lg">
                        <div className="h-[30dvh] rounded-lg bg-default-300"></div>
                      </Skeleton>
                      <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                      </div>
                    </Card>

                    <Card className="w-[20dvw] space-y-5 p-4" radius="lg">
                      <Skeleton className="rounded-lg">
                        <div className="h-[30dvh] rounded-lg bg-default-300"></div>
                      </Skeleton>
                      <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                      </div>
                    </Card>

                    <Card className="w-[20dvw] space-y-5 p-4" radius="lg">
                      <Skeleton className="rounded-lg">
                        <div className="h-[30dvh] rounded-lg bg-default-300"></div>
                      </Skeleton>
                      <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                      </div>
                    </Card>

                     <Card className="w-[20dvw] space-y-5 p-4" radius="lg">
                      <Skeleton className="rounded-lg">
                        <div className="h-[30dvh] rounded-lg bg-default-300"></div>
                      </Skeleton>
                      <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                      </div>
                    </Card>
                  </div>
                ) : (
                  <div className="gap-4 grid grid-cols-12">
                    {recipes.map((recipe, i) => (
                      <Card className="col-span-2" key={i}>
                        <CardBody>
                          <img
                            src={recipe.recipe.image}
                            alt=""
                            className="rounded"
                          />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                          <b className="">{recipe.recipe.label}</b>
                          <p className="text-default-500">
                            {recipe.recipe.source}
                          </p>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </Tab>
              <Tab key="music" title="Your Recipes">
                <Card>
                  <CardBody>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="videos" title="Videos">
                <Card>
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

import { createAction } from "@reduxjs/toolkit";

export const startLoadingAction = createAction('startLoadingAction')
export const updateLoadingLabelAction = createAction('updateLoadingLabelAction')
export const stopLoadingAction = createAction('stopLoadingAction')
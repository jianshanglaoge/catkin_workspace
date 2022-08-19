
"use strict";

let GetWifiInformation = require('./GetWifiInformation.js')
let ReadAllActions = require('./ReadAllActions.js')
let SetCommunicationInterfaceEnable = require('./SetCommunicationInterfaceEnable.js')
let ChangePassword = require('./ChangePassword.js')
let SendTwistJoystickCommand = require('./SendTwistJoystickCommand.js')
let ReadAllMappings = require('./ReadAllMappings.js')
let GetWrenchSoftLimitation = require('./GetWrenchSoftLimitation.js')
let RestoreFactoryProductConfiguration = require('./RestoreFactoryProductConfiguration.js')
let UpdateSequenceTask = require('./UpdateSequenceTask.js')
let GetControllerConfigurationMode = require('./GetControllerConfigurationMode.js')
let ApplyEmergencyStop = require('./ApplyEmergencyStop.js')
let PlayCartesianTrajectoryOrientation = require('./PlayCartesianTrajectoryOrientation.js')
let GetMeasuredGripperMovement = require('./GetMeasuredGripperMovement.js')
let GetMeasuredJointAngles = require('./GetMeasuredJointAngles.js')
let GetAllConnectedControllers = require('./GetAllConnectedControllers.js')
let OnNotificationSequenceInfoTopic = require('./OnNotificationSequenceInfoTopic.js')
let TakeSnapshot = require('./TakeSnapshot.js')
let ReadMapping = require('./ReadMapping.js')
let SendSelectedJointSpeedCommand = require('./SendSelectedJointSpeedCommand.js')
let ReadUserProfile = require('./ReadUserProfile.js')
let EnableBridge = require('./EnableBridge.js')
let OnNotificationRobotEventTopic = require('./OnNotificationRobotEventTopic.js')
let CreateSequence = require('./CreateSequence.js')
let UpdateMapping = require('./UpdateMapping.js')
let OnNotificationNetworkTopic = require('./OnNotificationNetworkTopic.js')
let PlayAdvancedSequence = require('./PlayAdvancedSequence.js')
let ComputeForwardKinematics = require('./ComputeForwardKinematics.js')
let CreateMapping = require('./CreateMapping.js')
let StopSequence = require('./StopSequence.js')
let DeleteAction = require('./DeleteAction.js')
let GetProductConfiguration = require('./GetProductConfiguration.js')
let DisableBridge = require('./DisableBridge.js')
let AddSequenceTasks = require('./AddSequenceTasks.js')
let DeleteWifiConfiguration = require('./DeleteWifiConfiguration.js')
let SendJointSpeedsCommand = require('./SendJointSpeedsCommand.js')
let AddWifiConfiguration = require('./AddWifiConfiguration.js')
let SetWifiCountryCode = require('./SetWifiCountryCode.js')
let CreateProtectionZone = require('./CreateProtectionZone.js')
let OnNotificationMappingInfoTopic = require('./OnNotificationMappingInfoTopic.js')
let PlayJointTrajectory = require('./PlayJointTrajectory.js')
let DeleteProtectionZone = require('./DeleteProtectionZone.js')
let GetAvailableWifi = require('./GetAvailableWifi.js')
let OnNotificationServoingModeTopic = require('./OnNotificationServoingModeTopic.js')
let GetAllJointsTorqueSoftLimitation = require('./GetAllJointsTorqueSoftLimitation.js')
let PlaySelectedJointTrajectory = require('./PlaySelectedJointTrajectory.js')
let Base_GetControlMode = require('./Base_GetControlMode.js')
let ExecuteActionFromReference = require('./ExecuteActionFromReference.js')
let ReadSequence = require('./ReadSequence.js')
let ComputeInverseKinematics = require('./ComputeInverseKinematics.js')
let UpdateMap = require('./UpdateMap.js')
let Base_OnNotificationControlModeTopic = require('./Base_OnNotificationControlModeTopic.js')
let PlaySequence = require('./PlaySequence.js')
let PlayPreComputedJointTrajectory = require('./PlayPreComputedJointTrajectory.js')
let DuplicateMapping = require('./DuplicateMapping.js')
let OnNotificationOperatingModeTopic = require('./OnNotificationOperatingModeTopic.js')
let SetAdmittance = require('./SetAdmittance.js')
let GetTwistHardLimitation = require('./GetTwistHardLimitation.js')
let CreateAction = require('./CreateAction.js')
let ReadAllUsers = require('./ReadAllUsers.js')
let OnNotificationArmStateTopic = require('./OnNotificationArmStateTopic.js')
let ResumeAction = require('./ResumeAction.js')
let GetWifiCountryCode = require('./GetWifiCountryCode.js')
let Stop = require('./Stop.js')
let DeleteSequence = require('./DeleteSequence.js')
let OnNotificationConfigurationChangeTopic = require('./OnNotificationConfigurationChangeTopic.js')
let ReadAllUserProfiles = require('./ReadAllUserProfiles.js')
let OnNotificationFactoryTopic = require('./OnNotificationFactoryTopic.js')
let Base_ClearFaults = require('./Base_ClearFaults.js')
let SendTwistCommand = require('./SendTwistCommand.js')
let ReadProtectionZone = require('./ReadProtectionZone.js')
let StartTeaching = require('./StartTeaching.js')
let SendJointSpeedsJoystickCommand = require('./SendJointSpeedsJoystickCommand.js')
let GetAllJointsTorqueHardLimitation = require('./GetAllJointsTorqueHardLimitation.js')
let SendWrenchJoystickCommand = require('./SendWrenchJoystickCommand.js')
let OnNotificationUserTopic = require('./OnNotificationUserTopic.js')
let DeleteAllSequenceTasks = require('./DeleteAllSequenceTasks.js')
let MoveSequenceTask = require('./MoveSequenceTask.js')
let StopTeaching = require('./StopTeaching.js')
let SetControllerConfiguration = require('./SetControllerConfiguration.js')
let GetConnectedWifiInformation = require('./GetConnectedWifiInformation.js')
let IsCommunicationInterfaceEnable = require('./IsCommunicationInterfaceEnable.js')
let ReadSequenceTask = require('./ReadSequenceTask.js')
let SendSelectedJointSpeedJoystickCommand = require('./SendSelectedJointSpeedJoystickCommand.js')
let DuplicateMap = require('./DuplicateMap.js')
let PlayCartesianTrajectory = require('./PlayCartesianTrajectory.js')
let SendWrenchCommand = require('./SendWrenchCommand.js')
let ActivateMap = require('./ActivateMap.js')
let DeleteSequenceTask = require('./DeleteSequenceTask.js')
let UpdateAction = require('./UpdateAction.js')
let GetArmState = require('./GetArmState.js')
let SendGripperCommand = require('./SendGripperCommand.js')
let UpdateSequence = require('./UpdateSequence.js')
let StartWifiScan = require('./StartWifiScan.js')
let GetAllJointsSpeedHardLimitation = require('./GetAllJointsSpeedHardLimitation.js')
let GetAllControllerConfigurations = require('./GetAllControllerConfigurations.js')
let ReadAllProtectionZones = require('./ReadAllProtectionZones.js')
let ConnectWifi = require('./ConnectWifi.js')
let GetIPv4Configuration = require('./GetIPv4Configuration.js')
let SetIPv4Configuration = require('./SetIPv4Configuration.js')
let ReadAction = require('./ReadAction.js')
let ReadAllMaps = require('./ReadAllMaps.js')
let GetTrajectoryErrorReport = require('./GetTrajectoryErrorReport.js')
let GetConfiguredWifi = require('./GetConfiguredWifi.js')
let DeleteMap = require('./DeleteMap.js')
let OnNotificationControllerTopic = require('./OnNotificationControllerTopic.js')
let CreateMap = require('./CreateMap.js')
let UpdateUserProfile = require('./UpdateUserProfile.js')
let DeleteMapping = require('./DeleteMapping.js')
let GetIPv4Information = require('./GetIPv4Information.js')
let GetTwistSoftLimitation = require('./GetTwistSoftLimitation.js')
let Base_GetCapSenseConfig = require('./Base_GetCapSenseConfig.js')
let GetFirmwareBundleVersions = require('./GetFirmwareBundleVersions.js')
let GetActuatorCount = require('./GetActuatorCount.js')
let UpdateEndEffectorTypeConfiguration = require('./UpdateEndEffectorTypeConfiguration.js')
let ReadMap = require('./ReadMap.js')
let OnNotificationProtectionZoneTopic = require('./OnNotificationProtectionZoneTopic.js')
let SetOperatingMode = require('./SetOperatingMode.js')
let DeleteUserProfile = require('./DeleteUserProfile.js')
let CreateUserProfile = require('./CreateUserProfile.js')
let SwapSequenceTasks = require('./SwapSequenceTasks.js')
let RestoreFactorySettings = require('./RestoreFactorySettings.js')
let ExecuteAction = require('./ExecuteAction.js')
let GetServoingMode = require('./GetServoingMode.js')
let GetBridgeList = require('./GetBridgeList.js')
let OnNotificationActionTopic = require('./OnNotificationActionTopic.js')
let PlayCartesianTrajectoryPosition = require('./PlayCartesianTrajectoryPosition.js')
let DisconnectWifi = require('./DisconnectWifi.js')
let GetWrenchHardLimitation = require('./GetWrenchHardLimitation.js')
let GetBridgeConfig = require('./GetBridgeConfig.js')
let GetAllConfiguredWifis = require('./GetAllConfiguredWifis.js')
let GetControllerConfiguration = require('./GetControllerConfiguration.js')
let GetOperatingMode = require('./GetOperatingMode.js')
let ReadAllSequenceTasks = require('./ReadAllSequenceTasks.js')
let PauseSequence = require('./PauseSequence.js')
let SetServoingMode = require('./SetServoingMode.js')
let ReadAllSequences = require('./ReadAllSequences.js')
let GetControllerState = require('./GetControllerState.js')
let GetMeasuredCartesianPose = require('./GetMeasuredCartesianPose.js')
let StopAction = require('./StopAction.js')
let ExecuteWaypointTrajectory = require('./ExecuteWaypointTrajectory.js')
let PauseAction = require('./PauseAction.js')
let UpdateProtectionZone = require('./UpdateProtectionZone.js')
let SetControllerConfigurationMode = require('./SetControllerConfigurationMode.js')
let ValidateWaypointList = require('./ValidateWaypointList.js')
let Base_SetCapSenseConfig = require('./Base_SetCapSenseConfig.js')
let ResumeSequence = require('./ResumeSequence.js')
let GetAllJointsSpeedSoftLimitation = require('./GetAllJointsSpeedSoftLimitation.js')
let Base_Unsubscribe = require('./Base_Unsubscribe.js')

module.exports = {
  GetWifiInformation: GetWifiInformation,
  ReadAllActions: ReadAllActions,
  SetCommunicationInterfaceEnable: SetCommunicationInterfaceEnable,
  ChangePassword: ChangePassword,
  SendTwistJoystickCommand: SendTwistJoystickCommand,
  ReadAllMappings: ReadAllMappings,
  GetWrenchSoftLimitation: GetWrenchSoftLimitation,
  RestoreFactoryProductConfiguration: RestoreFactoryProductConfiguration,
  UpdateSequenceTask: UpdateSequenceTask,
  GetControllerConfigurationMode: GetControllerConfigurationMode,
  ApplyEmergencyStop: ApplyEmergencyStop,
  PlayCartesianTrajectoryOrientation: PlayCartesianTrajectoryOrientation,
  GetMeasuredGripperMovement: GetMeasuredGripperMovement,
  GetMeasuredJointAngles: GetMeasuredJointAngles,
  GetAllConnectedControllers: GetAllConnectedControllers,
  OnNotificationSequenceInfoTopic: OnNotificationSequenceInfoTopic,
  TakeSnapshot: TakeSnapshot,
  ReadMapping: ReadMapping,
  SendSelectedJointSpeedCommand: SendSelectedJointSpeedCommand,
  ReadUserProfile: ReadUserProfile,
  EnableBridge: EnableBridge,
  OnNotificationRobotEventTopic: OnNotificationRobotEventTopic,
  CreateSequence: CreateSequence,
  UpdateMapping: UpdateMapping,
  OnNotificationNetworkTopic: OnNotificationNetworkTopic,
  PlayAdvancedSequence: PlayAdvancedSequence,
  ComputeForwardKinematics: ComputeForwardKinematics,
  CreateMapping: CreateMapping,
  StopSequence: StopSequence,
  DeleteAction: DeleteAction,
  GetProductConfiguration: GetProductConfiguration,
  DisableBridge: DisableBridge,
  AddSequenceTasks: AddSequenceTasks,
  DeleteWifiConfiguration: DeleteWifiConfiguration,
  SendJointSpeedsCommand: SendJointSpeedsCommand,
  AddWifiConfiguration: AddWifiConfiguration,
  SetWifiCountryCode: SetWifiCountryCode,
  CreateProtectionZone: CreateProtectionZone,
  OnNotificationMappingInfoTopic: OnNotificationMappingInfoTopic,
  PlayJointTrajectory: PlayJointTrajectory,
  DeleteProtectionZone: DeleteProtectionZone,
  GetAvailableWifi: GetAvailableWifi,
  OnNotificationServoingModeTopic: OnNotificationServoingModeTopic,
  GetAllJointsTorqueSoftLimitation: GetAllJointsTorqueSoftLimitation,
  PlaySelectedJointTrajectory: PlaySelectedJointTrajectory,
  Base_GetControlMode: Base_GetControlMode,
  ExecuteActionFromReference: ExecuteActionFromReference,
  ReadSequence: ReadSequence,
  ComputeInverseKinematics: ComputeInverseKinematics,
  UpdateMap: UpdateMap,
  Base_OnNotificationControlModeTopic: Base_OnNotificationControlModeTopic,
  PlaySequence: PlaySequence,
  PlayPreComputedJointTrajectory: PlayPreComputedJointTrajectory,
  DuplicateMapping: DuplicateMapping,
  OnNotificationOperatingModeTopic: OnNotificationOperatingModeTopic,
  SetAdmittance: SetAdmittance,
  GetTwistHardLimitation: GetTwistHardLimitation,
  CreateAction: CreateAction,
  ReadAllUsers: ReadAllUsers,
  OnNotificationArmStateTopic: OnNotificationArmStateTopic,
  ResumeAction: ResumeAction,
  GetWifiCountryCode: GetWifiCountryCode,
  Stop: Stop,
  DeleteSequence: DeleteSequence,
  OnNotificationConfigurationChangeTopic: OnNotificationConfigurationChangeTopic,
  ReadAllUserProfiles: ReadAllUserProfiles,
  OnNotificationFactoryTopic: OnNotificationFactoryTopic,
  Base_ClearFaults: Base_ClearFaults,
  SendTwistCommand: SendTwistCommand,
  ReadProtectionZone: ReadProtectionZone,
  StartTeaching: StartTeaching,
  SendJointSpeedsJoystickCommand: SendJointSpeedsJoystickCommand,
  GetAllJointsTorqueHardLimitation: GetAllJointsTorqueHardLimitation,
  SendWrenchJoystickCommand: SendWrenchJoystickCommand,
  OnNotificationUserTopic: OnNotificationUserTopic,
  DeleteAllSequenceTasks: DeleteAllSequenceTasks,
  MoveSequenceTask: MoveSequenceTask,
  StopTeaching: StopTeaching,
  SetControllerConfiguration: SetControllerConfiguration,
  GetConnectedWifiInformation: GetConnectedWifiInformation,
  IsCommunicationInterfaceEnable: IsCommunicationInterfaceEnable,
  ReadSequenceTask: ReadSequenceTask,
  SendSelectedJointSpeedJoystickCommand: SendSelectedJointSpeedJoystickCommand,
  DuplicateMap: DuplicateMap,
  PlayCartesianTrajectory: PlayCartesianTrajectory,
  SendWrenchCommand: SendWrenchCommand,
  ActivateMap: ActivateMap,
  DeleteSequenceTask: DeleteSequenceTask,
  UpdateAction: UpdateAction,
  GetArmState: GetArmState,
  SendGripperCommand: SendGripperCommand,
  UpdateSequence: UpdateSequence,
  StartWifiScan: StartWifiScan,
  GetAllJointsSpeedHardLimitation: GetAllJointsSpeedHardLimitation,
  GetAllControllerConfigurations: GetAllControllerConfigurations,
  ReadAllProtectionZones: ReadAllProtectionZones,
  ConnectWifi: ConnectWifi,
  GetIPv4Configuration: GetIPv4Configuration,
  SetIPv4Configuration: SetIPv4Configuration,
  ReadAction: ReadAction,
  ReadAllMaps: ReadAllMaps,
  GetTrajectoryErrorReport: GetTrajectoryErrorReport,
  GetConfiguredWifi: GetConfiguredWifi,
  DeleteMap: DeleteMap,
  OnNotificationControllerTopic: OnNotificationControllerTopic,
  CreateMap: CreateMap,
  UpdateUserProfile: UpdateUserProfile,
  DeleteMapping: DeleteMapping,
  GetIPv4Information: GetIPv4Information,
  GetTwistSoftLimitation: GetTwistSoftLimitation,
  Base_GetCapSenseConfig: Base_GetCapSenseConfig,
  GetFirmwareBundleVersions: GetFirmwareBundleVersions,
  GetActuatorCount: GetActuatorCount,
  UpdateEndEffectorTypeConfiguration: UpdateEndEffectorTypeConfiguration,
  ReadMap: ReadMap,
  OnNotificationProtectionZoneTopic: OnNotificationProtectionZoneTopic,
  SetOperatingMode: SetOperatingMode,
  DeleteUserProfile: DeleteUserProfile,
  CreateUserProfile: CreateUserProfile,
  SwapSequenceTasks: SwapSequenceTasks,
  RestoreFactorySettings: RestoreFactorySettings,
  ExecuteAction: ExecuteAction,
  GetServoingMode: GetServoingMode,
  GetBridgeList: GetBridgeList,
  OnNotificationActionTopic: OnNotificationActionTopic,
  PlayCartesianTrajectoryPosition: PlayCartesianTrajectoryPosition,
  DisconnectWifi: DisconnectWifi,
  GetWrenchHardLimitation: GetWrenchHardLimitation,
  GetBridgeConfig: GetBridgeConfig,
  GetAllConfiguredWifis: GetAllConfiguredWifis,
  GetControllerConfiguration: GetControllerConfiguration,
  GetOperatingMode: GetOperatingMode,
  ReadAllSequenceTasks: ReadAllSequenceTasks,
  PauseSequence: PauseSequence,
  SetServoingMode: SetServoingMode,
  ReadAllSequences: ReadAllSequences,
  GetControllerState: GetControllerState,
  GetMeasuredCartesianPose: GetMeasuredCartesianPose,
  StopAction: StopAction,
  ExecuteWaypointTrajectory: ExecuteWaypointTrajectory,
  PauseAction: PauseAction,
  UpdateProtectionZone: UpdateProtectionZone,
  SetControllerConfigurationMode: SetControllerConfigurationMode,
  ValidateWaypointList: ValidateWaypointList,
  Base_SetCapSenseConfig: Base_SetCapSenseConfig,
  ResumeSequence: ResumeSequence,
  GetAllJointsSpeedSoftLimitation: GetAllJointsSpeedSoftLimitation,
  Base_Unsubscribe: Base_Unsubscribe,
};
